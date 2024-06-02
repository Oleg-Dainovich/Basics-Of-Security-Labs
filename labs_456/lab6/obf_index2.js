function a() {
    const C = [
        '<h1>Article\x20succesfully\x20added</h1><script>',
        ';</script>',
        'postgres',
        'localhost',
        'qwerty',
        'connect',
        '379tSuRsJ',
        '9166uNAOCg',
        '5012589rSGVGv',
        '4TPrXOh',
        '112015jKRwLE',
        '258cZpnPu',
        '211106Tzhjra',
        '312zVRWnF',
        '15273kZtvMX',
        '6460ACdoAJ',
        '4951221uOXDtI',
        '46761396GKxTjI',
        '13ogqCwX',
        'http',
        'crypto',
        '127.0.0.1',
        'method',
        'POST',
        'length',
        'destroy',
        'body',
        'socket',
        'remoteAddress',
        'createServer',
        'setHeader',
        'Access-Control-Allow-Origin',
        'headers',
        'origin',
        'Access-Control-Request-Method',
        'Access-Control-Allow-Methods',
        'OPTIONS,\x20GET',
        'Access-Control-Allow-Headers',
        'OPTIONS',
        'writeHead',
        'end',
        'parsedUrl',
        'http://',
        'url',
        'pathname',
        'route',
        'listener',
        'Not\x20found',
        'error',
        'Internal\x20server\x20error',
        'push',
        'GET',
        'statusCode',
        'write',
        'string',
        'stringify',
        'listen',
        'log',
        'Server\x20running\x20at\x20http://',
        'fromEntries',
        'entries',
        '\x0a<html\x20lang=\x22en\x22>\x0a<body>\x0a<form\x20id=\x22login-form\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Login</button>\x0a</form>\x0a<p>Want\x20to\x20register?<a\x20href=\x22/register\x22>Click\x20here</a></p>\x0a</body>\x0a<script>\x0adocument.getElementById(\x27login-form\x27).addEventListener(\x27submit\x27,\x20ev\x20=>\x20{\x0a\x20\x20ev.preventDefault();\x0a\x20\x20const\x20{\x20name,\x20password\x20}\x20=\x20Object.fromEntries(new\x20FormData(ev.target).entries());\x0a\x0a\x20\x20document.cookie\x20=\x20`Authorization=${btoa(`${name}:${password}`)}`;\x0a\x20\x20window.location\x20=\x20\x27/\x27;\x0a});\x0a</script>\x0a</html>\x0a',
        '/login',
        '\x0a<html\x20lang=\x22en\x22>\x0a<form\x20method=\x22post\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Register</button>\x0a</form>\x0a<p>Want\x20to\x20login?<a\x20href=\x22/login\x22>Click\x20here</a></p>\x0a</html>\x0a',
        'setTimeout(()\x20=>\x20window.location=\x27',
        '\x27,\x202000)',
        '/register',
        'name',
        'password',
        '<h1>Invalid\x20form</h1><script>',
        '</script>',
        'query',
        'SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1',
        '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>',
        'createHash',
        'md5',
        'update',
        'digest',
        'hex',
        'INSERT\x20INTO\x20\x22user\x22(\x22name\x22,\x20\x22password\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Successfully\x20registered</h1><script>',
        'from',
        'base64',
        'toString',
        'split',
        'rows',
        'replace',
        '&amp;',
        '&lt;',
        '&gt;',
        '&quot;',
        '&#39;',
        '/delete',
        'cookie',
        'Authorization=',
        '<h1>User\x20not\x20logged\x20in</h1><script>',
        'role',
        'admin',
        '<h1>Must\x20be\x20admin</h1><script>',
        'DELETE\x20FROM\x20\x22article\x22\x20WHERE\x20\x22id\x22\x20=\x20$1',
        '<h1>Article\x20sucessfully\x20deleted</h1><script>',
        'searchParams',
        'get',
        '\x0a\x20\x20SELECT\x20\x22article\x22.\x22id\x22\x20AS\x20\x22id\x22,\x20\x22message\x22,\x20\x22name\x22\x0a\x20\x20FROM\x20\x22article\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22user\x22\x20ON\x20\x22user\x22.\x22id\x22\x20=\x20\x22article\x22.\x22userId\x22\x0a\x20\x20',
        'WHERE\x20\x22message\x22\x20ILIKE\x20\x27',
        '\x0a\x20\x20',
        '\x0a<html\x20lang=\x22en\x22>\x0a',
        '\x0a<form>\x0a<label>Search</label>:<input\x20type=\x22search\x22\x20id=\x22q\x22\x20name=\x22q\x22\x20/><br>\x0a<button\x20type=\x22submit\x22>Search!</button>\x0a</form>\x0a<ul>\x0a\x20\x20',
        'map',
        '<li>Author:\x20',
        '.\x20Text:\x20',
        'message',
        '<form\x20method=\x22post\x22\x20action=\x22/delete\x22><input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=',
        '><button\x20type=\x22submit\x22>Delete</button></form>',
        '</li>',
        'join',
        '\x0a\x20\x20</ul>',
        'No\x20articles\x20found',
        '\x0a\x20\x20<br>\x0a\x20\x20<form\x20method=\x22post\x22\x20>\x0a\x20\x20<label>Message</label>\x20<input\x20name=\x22message\x22><br>\x0a\x20\x20<button\x20type=\x22submit\x22>Add\x20article</button>\x0a</form>\x0a</html>\x0a\x20\x20',
        '<h1>No\x20article\x20name\x20provided</h1><script>',
        'INSERT\x20INTO\x20\x22article\x22(\x22message\x22,\x20\x22userId\x22)\x20VALUES\x20($1,\x20$2)'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = b;
(function (c, d) {
    const j = b;
    const e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x68)) / 0x1 * (parseInt(j(0x69)) / 0x2) + -parseInt(j(0x6a)) / 0x3 * (parseInt(j(0x6b)) / 0x4) + parseInt(j(0x6c)) / 0x5 * (parseInt(j(0x6d)) / 0x6) + -parseInt(j(0x6e)) / 0x7 * (parseInt(j(0x6f)) / 0x8) + parseInt(j(0x70)) / 0x9 * (parseInt(j(0x71)) / 0xa) + -parseInt(j(0x72)) / 0xb + parseInt(j(0x73)) / 0xc * (parseInt(j(0x74)) / 0xd);
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe12a9));
const http = require(k(0x75));
const {Client} = require('pg');
const crypto = require(k(0x76));
const hostname = k(0x77);
const port = 0xbb9;
const handlers = [];
const MAX_LENGTH = 0xf4240;
async function parseBody(c) {
    const l = b;
    if (c[l(0x78)] !== l(0x79)) {
        return;
    }
    let d = '';
    for await (const e of c) {
        d += e;
        if (d[l(0x7a)] > MAX_LENGTH) {
            c[l(0x7b)]();
        }
    }
    c[l(0x7c)] = d;
}
let loggedTimes = {};
const RPS = 0x64;
function rateLimit(c, d) {
    const m = b;
    const e = c[m(0x7d)][m(0x7e)];
    const f = loggedTimes[e] ?? 0x0;
    if (f > RPS) {
        return d[m(0x7b)]();
    }
    loggedTimes[e] = f + 0x1;
}
setInterval(() => loggedTimes = {}, 0x3e8);
const server = http[k(0x7f)](async (c, d) => {
    const n = b;
    try {
        d[n(0x80)](n(0x81), c?.[n(0x82)]?.[n(0x83)] ?? '*');
        d[n(0x80)](n(0x84), '*');
        d[n(0x80)](n(0x85), n(0x86));
        d[n(0x80)](n(0x87), '*');
        if (c[n(0x78)] === n(0x88)) {
            d[n(0x89)](0xcc);
            d[n(0x8a)]();
            return;
        }
        rateLimit(c, d);
        c[n(0x8b)] = new URL(n(0x8c) + hostname + ':' + port + c[n(0x8d)]);
        for (const f of handlers) {
            if (c[n(0x78)] === f[n(0x78)] && c[n(0x8b)][n(0x8e)] === f[n(0x8f)]) {
                await parseBody(c);
                let g = f[n(0x90)](c, d);
                if (g instanceof Promise) {
                    g = await g;
                }
                return;
            }
        }
        response(d, { 'message': n(0x91) }, 0x194);
    } catch (h) {
        console[n(0x92)](h);
        response(d, { 'message': n(0x93) }, 0x1f4);
    }
});
function post(c, d) {
    const o = b;
    handlers[o(0x94)]({
        'route': c,
        'method': o(0x79),
        'listener': d
    });
}
function get(c, d) {
    const p = b;
    handlers[p(0x94)]({
        'route': c,
        'method': p(0x95),
        'listener': d
    });
}
function response(c, d, e = 0xc8) {
    const q = b;
    c[q(0x96)] = e;
    c[q(0x97)](typeof d === q(0x98) ? d : JSON[q(0x99)](d));
    c[q(0x8a)]();
}
function listen() {
    const r = b;
    server[r(0x9a)](port, hostname, () => {
        const s = b;
        console[s(0x9b)](s(0x9c) + hostname + ':' + port + '/');
    });
}
function parseUrlBody(c) {
    const t = b;
    return Object[t(0x9d)](new URLSearchParams(c)[t(0x9e)]());
}
const loginHtml = k(0x9f);
get(k(0xa0), (c, d) => {
    response(d, loginHtml);
});
const registerHtml = k(0xa1);
const redirectScript = c => k(0xa2) + c + k(0xa3);
get(k(0xa4), (c, d) => {
    response(d, registerHtml);
});
post(k(0xa4), async (c, d) => {
    const u = b;
    const e = parseUrlBody(c[u(0x7c)]);
    if (!e?.[u(0xa5)] || !e?.[u(0xa6)]) {
        response(d, u(0xa7) + redirectScript(u(0xa4)) + u(0xa8));
        return;
    }
    const {rows: f} = await pgClient[u(0xa9)](u(0xaa), [e[u(0xa5)]]);
    const g = f[0x0];
    if (g) {
        response(d, u(0xab) + redirectScript(u(0xa4)) + u(0xa8));
        return;
    }
    const h = crypto[u(0xac)](u(0xad))[u(0xae)](e[u(0xa6)])[u(0xaf)](u(0xb0));
    await pgClient[u(0xa9)](u(0xb1), [
        e[u(0xa5)],
        h
    ]);
    return response(d, u(0xb2) + redirectScript(u(0xa0)) + u(0xa8));
});
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0x68;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
let pgClient;
async function getAuthUser(c) {
    const v = b;
    if (!c) {
        return;
    }
    const d = Buffer[v(0xb3)](c, v(0xb4))[v(0xb5)]();
    if (!d) {
        return;
    }
    const [e, f] = d[v(0xb6)](':', 0x2);
    if (!e) {
        return undefined;
    }
    const g = await pgClient[v(0xa9)](v(0xaa), [e]);
    const h = g[v(0xb7)][0x0];
    if (!h) {
        return undefined;
    }
    const i = crypto[v(0xac)](v(0xad))[v(0xae)](f)[v(0xaf)](v(0xb0));
    if (h[v(0xa6)] !== i) {
        return undefined;
    }
    return h;
}
function escapeHtml(c) {
    const w = b;
    return c[w(0xb8)](/&/g, w(0xb9))[w(0xb8)](/</g, w(0xba))[w(0xb8)](/>/g, w(0xbb))[w(0xb8)](/"/g, w(0xbc))[w(0xb8)](/'/g, w(0xbd));
}
post(k(0xbe), async (c, d) => {
    const x = b;
    const e = c?.[x(0x82)]?.[x(0xbf)]?.[x(0xb6)](x(0xc0))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, x(0xc1) + redirectScript(x(0xa0)) + x(0xa8));
    }
    if (f[x(0xc2)] !== x(0xc3)) {
        return response(d, x(0xc4) + redirectScript('/') + x(0xa8));
    }
    const {id: g} = parseUrlBody(c[x(0x7c)]);
    await pgClient[x(0xa9)](x(0xc5), [Number(g)]);
    return response(d, x(0xc6) + redirectScript('/') + x(0xa8));
});
get('/', async (c, d) => {
    const y = b;
    const e = c?.[y(0x82)]?.[y(0xbf)]?.[y(0xb6)](y(0xc0))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, y(0xc1) + redirectScript(y(0xa0)) + y(0xa8));
    }
    const g = c?.[y(0x8b)]?.[y(0xc7)]?.[y(0xc8)]('q');
    const {rows: h} = await pgClient[y(0xa9)](y(0xc9) + (g ? y(0xca) + g + '%\x27' : '') + y(0xcb));
    return response(d, y(0xcc) + (h?.[y(0x7a)] ? y(0xcd) + h[y(0xce)](i => {
        const z = b;
        return z(0xcf) + escapeHtml(i[z(0xa5)]) + z(0xd0) + escapeHtml(i[z(0xd1)]) + '\x20' + (f[z(0xc2)] === z(0xc3) ? z(0xd2) + i['id'] + z(0xd3) : '') + z(0xd4);
    })[y(0xd5)]('\x0a') + y(0xd6) : y(0xd7)) + y(0xd8));
});
post('/', async (c, d) => {
    const A = b;
    const e = c?.[A(0x82)]?.[A(0xbf)]?.[A(0xb6)](A(0xc0))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, A(0xc1) + redirectScript(A(0xa0)) + A(0xa8));
    }
    const g = parseUrlBody(c[A(0x7c)]);
    if (!g?.[A(0xd1)]) {
        return response(d, A(0xd9) + redirectScript('/') + A(0xa8));
    }
    await pgClient[A(0xa9)](A(0xda), [
        g[A(0xd1)],
        f['id']
    ]);
    return response(d, A(0xdb) + redirectScript('/') + A(0xdc));
});
async function main() {
    const B = b;
    pgClient = new Client({
        'user': B(0xdd),
        'host': B(0xde),
        'database': B(0xdd),
        'password': B(0xdf),
        'port': 0x1538
    });
    await pgClient[B(0xe0)]();
    listen();
}
main();