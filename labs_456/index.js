const http = require('http');
const { Client } = require('pg');
const crypto = require('crypto');

const hostname = '127.0.0.1';
const port = 3001;
const handlers = [];

const MAX_LENGTH = 1e6;

async function parseBody(req) {
  if (req.method !== 'POST') {
    return;
  }

  let body = '';
  for await (const data of req) {
    body += data;
    if (body.length > MAX_LENGTH) {
      // buffer overflow
      req.destroy();
    }
  }

  req.body = body;
}

let loggedTimes = {};

const RPS = 100;

function rateLimit(req, res) {
  const ip = req.socket.remoteAddress;
  const times = loggedTimes[ip] ?? 0;
  if (times > RPS) {
    return res.destroy();
  }

  loggedTimes[ip] = times + 1;
}

setInterval(() => (loggedTimes = {}), 1000);

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', req?.headers?.origin ?? '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
    rateLimit(req, res);
    req.parsedUrl = new URL(`http://${hostname}:${port}${req.url}`);
    for (const handler of handlers) {
      if (req.method === handler.method && req.parsedUrl.pathname === handler.route) {
        await parseBody(req);
        let result = handler.listener(req, res);
        if (result instanceof Promise) {
          result = await result;
        }
        return;
      }
    }

    response(res, { message: 'Not found' }, 404);
  } catch (e) {
    console.error(e);
    response(res, { message: 'Internal server error' }, 500);
  }
});

function post(route, listener) {
  handlers.push({
    route,
    method: 'POST',
    listener,
  });
}

function get(route, listener) {
  handlers.push({
    route,
    method: 'GET',
    listener,
  });
}

function response(res, body, statusCode = 200) {
  res.statusCode = statusCode;
  res.write(typeof body === 'string' ? body : JSON.stringify(body));
  res.end();
}

function listen() {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

function parseUrlBody(body) {
  return Object.fromEntries(new URLSearchParams(body).entries());
}

const loginHtml = `
<html lang="en">
<body>
<form id="login-form">
<label>Name</label><input name="name"><br>
<label>Password</label><input name="password" type="password"><br>
<button type="submit">Login</button>
</form>
<p>Want to register?<a href="/register">Click here</a></p>
</body>
<script>
document.getElementById('login-form').addEventListener('submit', ev => {
  ev.preventDefault();
  const { name, password } = Object.fromEntries(new FormData(ev.target).entries());

  document.cookie = \`Authorization=\${btoa(\`\${name}:\${password}\`)}\`;
  window.location = '/';
});
</script>
</html>
`;


get('/login', (req, res) => {
  response(res, loginHtml);
});

const registerHtml = `
<html lang="en">
<form method="post">
<label>Name</label><input name="name"><br>
<label>Password</label><input name="password" type="password"><br>
<button type="submit">Register</button>
</form>
<p>Want to login?<a href="/login">Click here</a></p>
</html>
`;

const redirectScript = (path) => `setTimeout(() => window.location='${path}', 2000)`;

get('/register', (req, res) => {
  response(res, registerHtml);
});

post('/register', async (req, res) => {
  const user = parseUrlBody(req.body);
  if (!user?.name || !user?.password) {
    response(res, `<h1>Invalid form</h1><script>${redirectScript('/register')}</script>`);
    return;
  }
  const { rows } = await pgClient.query(`SELECT * FROM "user" WHERE "name" = $1`, [user.name]);
  const dbUser = rows[0];

  if (dbUser) {
    response(res, `<h1>User with this name already exists</h1><script>${redirectScript('/register')}</script>`);
    return;
  }

  const hashPass = crypto.createHash('md5').update(user.password).digest('hex');

  await pgClient.query(`INSERT INTO "user"("name", "password") VALUES ($1, $2)`, [user.name, hashPass]);

  return response(res, `<h1>Successfully registered</h1><script>${redirectScript('/login')}</script>`);
});


/**
 * @type {Client}
 */
let pgClient;

async function getAuthUser(authHeader) {
  if (!authHeader) {
    return;
  }

  const decoded = Buffer.from(authHeader, 'base64').toString();
  if (!decoded) {
    return;
  }

  const [name, pass] = decoded.split(':', 2);
  if (!name) {
    return undefined;
  }

  const res = await pgClient.query(`SELECT * FROM "user" WHERE "name" = $1`, [name]);

  const user = res.rows[0];
  if (!user) {
    return undefined;
  }

  const hashPass = crypto.createHash('md5').update(pass).digest('hex');

  if (user.password !== hashPass) {
    return undefined;
  }

  return user;
}

function escapeHtml(htmlStr) {
  return htmlStr.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

post('/delete', async (req, res) => {
  const authHeader = req?.headers?.cookie?.split('Authorization=')[1];
  const user = await getAuthUser(authHeader);
  if (!user) {
    return response(res, `<h1>User not logged in</h1><script>${redirectScript('/login')}</script>`);
  }

  if (user.role !== 'admin') {
    return response(res, `<h1>Must be admin</h1><script>${redirectScript('/')}</script>`);
  }

  const { id } = parseUrlBody(req.body);

  await pgClient.query(`DELETE FROM "article" WHERE "id" = $1`, [Number(id)]);
  return response(res, `<h1>Article sucessfully deleted</h1><script>${redirectScript('/')}</script>`);
});
// ' UNION SELECT id, password, name from "user" WHERE 1=1 OR 'a' ='
get('/', async (req, res) => {
  const authHeader = req?.headers?.cookie?.split('Authorization=')[1];
  const user = await getAuthUser(authHeader);
  if (!user) {
    return response(res, `<h1>User not logged in</h1><script>${redirectScript('/login')}</script>`);
  }

  const q = req?.parsedUrl?.searchParams?.get('q');
  const { rows: articles } = await pgClient.query(`
  SELECT "article"."id" AS "id", "message", "name"
  FROM "article"
           INNER JOIN "user" ON "user"."id" = "article"."userId"
  ${q ? `WHERE "message" ILIKE '${q}%'` : ''}
  `);

  return response(res, `
<html lang="en">
${articles?.length ? `
<form>
<label>Search</label>:<input type="search" id="q" name="q" /><br>
<button type="submit">Search!</button>
</form>
<ul>
  ${articles.map(article => {
    return `<li>Author: ${escapeHtml(article.name)}. Text: ${escapeHtml(article.message)} ${user.role === 'admin' ?
      `<form method="post" action="/delete"><input type="hidden" name="id" value=${article.id}><button type="submit">Delete</button></form>` : ''}</li>`;
  }).join('\n')}
  </ul>` : 'No articles found'}
  <br>
  <form method="post" >
  <label>Message</label> <input name="message"><br>
  <button type="submit">Add article</button>
</form>
</html>
  `);
});

post('/', async (req, res) => {
  const authHeader = req?.headers?.cookie?.split('Authorization=')[1];
  const user = await getAuthUser(authHeader);
  if (!user) {
    return response(res, `<h1>User not logged in</h1><script>${redirectScript('/login')}</script>`);
  }

  const article = parseUrlBody(req.body);
  if (!article?.message) {
    return response(res, `<h1>No article name provided</h1><script>${redirectScript('/')}</script>`);
  }

  await pgClient.query(`INSERT INTO "article"("message", "userId") VALUES ($1, $2)`, [article.message, user.id]);

  return response(res, `<h1>Article succesfully added</h1><script>${redirectScript('/')};</script>`);
});

async function main() {
  pgClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'qwerty',
    port: 5432,
  });
  await pgClient.connect();

  listen();
}

main();
