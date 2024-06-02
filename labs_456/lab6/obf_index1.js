const http = require('http'), {Client} = require('pg'), crypto = require('crypto'), hostname = '127.0.0.1', port = 0xbb9, handlers = [], MAX_LENGTH = 0xf4240;
async function parseBody(a) {
    if (a['method'] !== 'POST')
        return;
    let b = '';
    for await (const c of a) {
        b += c, b['length'] > MAX_LENGTH && a['destroy']();
    }
    a['body'] = b;
}
let loggedTimes = {};
const RPS = 0x64;
function rateLimit(a, b) {
    const c = a['socket']['remoteAddress'], d = loggedTimes[c] ?? 0x0;
    if (d > RPS)
        return b['destroy']();
    loggedTimes[c] = d + 0x1;
}
setInterval(() => loggedTimes = {}, 0x3e8);
const server = http['createServer'](async (a, b) => {
    try {
        b['setHeader']('Access-Control-Allow-Origin', a?.['headers']?.['origin'] ?? '*'), b['setHeader']('Access-Control-Request-Method', '*'), b['setHeader']('Access-Control-Allow-Methods', 'OPTIONS,\x20GET'), b['setHeader']('Access-Control-Allow-Headers', '*');
        if (a['method'] === 'OPTIONS') {
            b['writeHead'](0xcc), b['end']();
            return;
        }
        rateLimit(a, b), a['parsedUrl'] = new URL('http://' + hostname + ':' + port + a['url']);
        for (const c of handlers) {
            if (a['method'] === c['method'] && a['parsedUrl']['pathname'] === c['route']) {
                await parseBody(a);
                let d = c['listener'](a, b);
                d instanceof Promise && (d = await d);
                return;
            }
        }
        response(b, { 'message': 'Not\x20found' }, 0x194);
    } catch (f) {
        console['error'](f), response(b, { 'message': 'Internal\x20server\x20error' }, 0x1f4);
    }
});
function post(a, b) {
    handlers['push']({
        'route': a,
        'method': 'POST',
        'listener': b
    });
}
function get(a, b) {
    handlers['push']({
        'route': a,
        'method': 'GET',
        'listener': b
    });
}
function response(a, b, c = 0xc8) {
    a['statusCode'] = c, a['write'](typeof b === 'string' ? b : JSON['stringify'](b)), a['end']();
}
function listen() {
    server['listen'](port, hostname, () => {
        console['log']('Server\x20running\x20at\x20http://' + hostname + ':' + port + '/');
    });
}
function parseUrlBody(a) {
    return Object['fromEntries'](new URLSearchParams(a)['entries']());
}
const loginHtml = '\x0a<html\x20lang=\x22en\x22>\x0a<body>\x0a<form\x20id=\x22login-form\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Login</button>\x0a</form>\x0a<p>Want\x20to\x20register?<a\x20href=\x22/register\x22>Click\x20here</a></p>\x0a</body>\x0a<script>\x0adocument.getElementById(\x27login-form\x27).addEventListener(\x27submit\x27,\x20ev\x20=>\x20{\x0a\x20\x20ev.preventDefault();\x0a\x20\x20const\x20{\x20name,\x20password\x20}\x20=\x20Object.fromEntries(new\x20FormData(ev.target).entries());\x0a\x0a\x20\x20document.cookie\x20=\x20`Authorization=${btoa(`${name}:${password}`)}`;\x0a\x20\x20window.location\x20=\x20\x27/\x27;\x0a});\x0a</script>\x0a</html>\x0a';
get('/login', (a, b) => {
    response(b, loginHtml);
});
const registerHtml = '\x0a<html\x20lang=\x22en\x22>\x0a<form\x20method=\x22post\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Register</button>\x0a</form>\x0a<p>Want\x20to\x20login?<a\x20href=\x22/login\x22>Click\x20here</a></p>\x0a</html>\x0a', redirectScript = a => 'setTimeout(()\x20=>\x20window.location=\x27' + a + '\x27,\x202000)';
get('/register', (a, b) => {
    response(b, registerHtml);
}), post('/register', async (a, b) => {
    const c = parseUrlBody(a['body']);
    if (!c?.['name'] || !c?.['password']) {
        response(b, '<h1>Invalid\x20form</h1><script>' + redirectScript('/register') + '</script>');
        return;
    }
    const {rows: d} = await pgClient['query']('SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1', [c['name']]), e = d[0x0];
    if (e) {
        response(b, '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>' + redirectScript('/register') + '</script>');
        return;
    }
    const f = crypto['createHash']('md5')['update'](c['password'])['digest']('hex');
    return await pgClient['query']('INSERT\x20INTO\x20\x22user\x22(\x22name\x22,\x20\x22password\x22)\x20VALUES\x20($1,\x20$2)', [
        c['name'],
        f
    ]), response(b, '<h1>Successfully\x20registered</h1><script>' + redirectScript('/login') + '</script>');
});
let pgClient;
async function getAuthUser(a) {
    if (!a)
        return;
    const b = Buffer['from'](a, 'base64')['toString']();
    if (!b)
        return;
    const [c, d] = b['split'](':', 0x2);
    if (!c)
        return undefined;
    const e = await pgClient['query']('SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1', [c]), f = e['rows'][0x0];
    if (!f)
        return undefined;
    const g = crypto['createHash']('md5')['update'](d)['digest']('hex');
    if (f['password'] !== g)
        return undefined;
    return f;
}
function escapeHtml(a) {
    return a['replace'](/&/g, '&amp;')['replace'](/</g, '&lt;')['replace'](/>/g, '&gt;')['replace'](/"/g, '&quot;')['replace'](/'/g, '&#39;');
}
post('/delete', async (a, b) => {
    const c = a?.['headers']?.['cookie']?.['split']('Authorization=')[0x1], d = await getAuthUser(c);
    if (!d)
        return response(b, '<h1>User\x20not\x20logged\x20in</h1><script>' + redirectScript('/login') + '</script>');
    if (d['role'] !== 'admin')
        return response(b, '<h1>Must\x20be\x20admin</h1><script>' + redirectScript('/') + '</script>');
    const {id: e} = parseUrlBody(a['body']);
    return await pgClient['query']('DELETE\x20FROM\x20\x22article\x22\x20WHERE\x20\x22id\x22\x20=\x20$1', [Number(e)]), response(b, '<h1>Article\x20sucessfully\x20deleted</h1><script>' + redirectScript('/') + '</script>');
}), get('/', async (a, b) => {
    const c = a?.['headers']?.['cookie']?.['split']('Authorization=')[0x1], d = await getAuthUser(c);
    if (!d)
        return response(b, '<h1>User\x20not\x20logged\x20in</h1><script>' + redirectScript('/login') + '</script>');
    const e = a?.['parsedUrl']?.['searchParams']?.['get']('q'), {rows: f} = await pgClient['query']('\x0a\x20\x20SELECT\x20\x22article\x22.\x22id\x22\x20AS\x20\x22id\x22,\x20\x22message\x22,\x20\x22name\x22\x0a\x20\x20FROM\x20\x22article\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22user\x22\x20ON\x20\x22user\x22.\x22id\x22\x20=\x20\x22article\x22.\x22userId\x22\x0a\x20\x20' + (e ? 'WHERE\x20\x22message\x22\x20ILIKE\x20\x27' + e + '%\x27' : '') + '\x0a\x20\x20');
    return response(b, '\x0a<html\x20lang=\x22en\x22>\x0a' + (f?.['length'] ? '\x0a<form>\x0a<label>Search</label>:<input\x20type=\x22search\x22\x20id=\x22q\x22\x20name=\x22q\x22\x20/><br>\x0a<button\x20type=\x22submit\x22>Search!</button>\x0a</form>\x0a<ul>\x0a\x20\x20' + f['map'](g => {
        return '<li>Author:\x20' + escapeHtml(g['name']) + '.\x20Text:\x20' + escapeHtml(g['message']) + '\x20' + (d['role'] === 'admin' ? '<form\x20method=\x22post\x22\x20action=\x22/delete\x22><input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=' + g['id'] + '><button\x20type=\x22submit\x22>Delete</button></form>' : '') + '</li>';
    })['join']('\x0a') + '\x0a\x20\x20</ul>' : 'No\x20articles\x20found') + '\x0a\x20\x20<br>\x0a\x20\x20<form\x20method=\x22post\x22\x20>\x0a\x20\x20<label>Message</label>\x20<input\x20name=\x22message\x22><br>\x0a\x20\x20<button\x20type=\x22submit\x22>Add\x20article</button>\x0a</form>\x0a</html>\x0a\x20\x20');
}), post('/', async (a, b) => {
    const c = a?.['headers']?.['cookie']?.['split']('Authorization=')[0x1], d = await getAuthUser(c);
    if (!d)
        return response(b, '<h1>User\x20not\x20logged\x20in</h1><script>' + redirectScript('/login') + '</script>');
    const e = parseUrlBody(a['body']);
    if (!e?.['message'])
        return response(b, '<h1>No\x20article\x20name\x20provided</h1><script>' + redirectScript('/') + '</script>');
    return await pgClient['query']('INSERT\x20INTO\x20\x22article\x22(\x22message\x22,\x20\x22userId\x22)\x20VALUES\x20($1,\x20$2)', [
        e['message'],
        d['id']
    ]), response(b, '<h1>Article\x20succesfully\x20added</h1><script>' + redirectScript('/') + ';</script>');
});
async function main() {
    pgClient = new Client({
        'user': 'postgres',
        'host': 'localhost',
        'database': 'postgres',
        'password': 'qwerty',
        'port': 0x1538
    }), await pgClient['connect'](), listen();
}
main();