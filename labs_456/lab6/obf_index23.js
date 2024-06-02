const t = b;
(function (c, d) {
    const s = b;
    const e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xfa)) / 0x1 + parseInt(s(0xfb)) / 0x2 + -parseInt(s(0xfc)) / 0x3 * (parseInt(s(0xfd)) / 0x4) + -parseInt(s(0xfe)) / 0x5 * (-parseInt(s(0xff)) / 0x6) + -parseInt(s(0x100)) / 0x7 * (-parseInt(s(0x101)) / 0x8) + parseInt(s(0x102)) / 0x9 * (-parseInt(s(0x103)) / 0xa) + -parseInt(s(0x104)) / 0xb;
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8773d));
const http = require('http');
const {Client} = require('pg');
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0xfa;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
const crypto = require(t(0x105));
const hostname = t(0x106);
const port = 0xbb9;
const handlers = [];
const MAX_LENGTH = 0xf4240;
async function parseBody(c) {
    const u = b;
    if (c[u(0x107)] !== u(0x108)) {
        return;
    }
    let d = '';
    for await (const e of c) {
        if (u(0x109) === 'eIvqN') {
            d += e;
            if (d[u(0x10a)] > MAX_LENGTH) {
                c[u(0x10b)]();
            }
        } else {
            f(g, h);
        }
    }
    c[u(0x10c)] = d;
}
let loggedTimes = {};
const RPS = 0x64;
function rateLimit(c, d) {
    const v = b;
    const e = c[v(0x10d)][v(0x10e)];
    const f = loggedTimes[e] ?? 0x0;
    if (f > RPS) {
        return d[v(0x10b)]();
    }
    loggedTimes[e] = f + 0x1;
}
setInterval(() => loggedTimes = {}, 0x3e8);
const server = http[t(0x10f)](async (c, d) => {
    const w = b;
    try {
        d['setHeader']('Access-Control-Allow-Origin', c?.[w(0x110)]?.[w(0x111)] ?? '*');
        d[w(0x112)](w(0x113), '*');
        d[w(0x112)]('Access-Control-Allow-Methods', 'OPTIONS,\x20GET');
        d['setHeader'](w(0x114), '*');
        if (c[w(0x107)] === 'OPTIONS') {
            d['writeHead'](0xcc);
            d['end']();
            return;
        }
        rateLimit(c, d);
        c[w(0x115)] = new URL(w(0x116) + hostname + ':' + port + c[w(0x117)]);
        for (const f of handlers) {
            if (c[w(0x107)] === f['method'] && c[w(0x115)][w(0x118)] === f['route']) {
                await parseBody(c);
                let g = f['listener'](c, d);
                if (g instanceof Promise) {
                    if (w(0x119) === w(0x11a)) {
                        return f(g, w(0x11b) + h('/login') + '</script>');
                    } else {
                        g = await g;
                    }
                }
                return;
            }
        }
        response(d, { 'message': w(0x11c) }, 0x194);
    } catch (i) {
        console[w(0x11d)](i);
        response(d, { 'message': w(0x11e) }, 0x1f4);
    }
});
function post(c, d) {
    const x = b;
    handlers[x(0x11f)]({
        'route': c,
        'method': x(0x108),
        'listener': d
    });
}
function get(c, d) {
    const y = b;
    handlers[y(0x11f)]({
        'route': c,
        'method': y(0x120),
        'listener': d
    });
}
function response(c, d, e = 0xc8) {
    const z = b;
    c['statusCode'] = e;
    c[z(0x121)](typeof d === z(0x122) ? d : JSON[z(0x123)](d));
    c[z(0x124)]();
}
function listen() {
    const A = b;
    server[A(0x125)](port, hostname, () => {
        const B = b;
        console[B(0x126)](B(0x127) + hostname + ':' + port + '/');
    });
}
function parseUrlBody(c) {
    const C = b;
    return Object[C(0x128)](new URLSearchParams(c)[C(0x129)]());
}
const loginHtml = '\x0a<html\x20lang=\x22en\x22>\x0a<body>\x0a<form\x20id=\x22login-form\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Login</button>\x0a</form>\x0a<p>Want\x20to\x20register?<a\x20href=\x22/register\x22>Click\x20here</a></p>\x0a</body>\x0a<script>\x0adocument.getElementById(\x27login-form\x27).addEventListener(\x27submit\x27,\x20ev\x20=>\x20{\x0a\x20\x20ev.preventDefault();\x0a\x20\x20const\x20{\x20name,\x20password\x20}\x20=\x20Object.fromEntries(new\x20FormData(ev.target).entries());\x0a\x0a\x20\x20document.cookie\x20=\x20`Authorization=${btoa(`${name}:${password}`)}`;\x0a\x20\x20window.location\x20=\x20\x27/\x27;\x0a});\x0a</script>\x0a</html>\x0a';
get('/login', (c, d) => {
    response(d, loginHtml);
});
const registerHtml = t(0x12a);
const redirectScript = c => t(0x12b) + c + t(0x12c);
get(t(0x12d), (c, d) => {
    response(d, registerHtml);
});
post(t(0x12d), async (c, d) => {
    const D = b;
    const e = parseUrlBody(c[D(0x10c)]);
    if (!e?.['name'] || !e?.[D(0x12e)]) {
        if ('njMGA' !== 'XWFfs') {
            response(d, D(0x12f) + redirectScript(D(0x12d)) + D(0x130));
            return;
        } else {
            f[D(0x11f)]({
                'route': g,
                'method': D(0x108),
                'listener': h
            });
        }
    }
    const {rows: f} = await pgClient[D(0x131)](D(0x132), [e[D(0x133)]]);
    const g = f[0x0];
    if (g) {
        response(d, '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>' + redirectScript('/register') + D(0x130));
        return;
    }
    const h = crypto[D(0x134)]('md5')['update'](e['password'])[D(0x135)](D(0x136));
    await pgClient[D(0x131)](D(0x137), [
        e[D(0x133)],
        h
    ]);
    return response(d, D(0x138) + redirectScript('/login') + D(0x130));
});
let pgClient;
async function getAuthUser(c) {
    const E = b;
    if (!c) {
        return;
    }
    const d = Buffer[E(0x139)](c, E(0x13a))['toString']();
    if (!d) {
        if (E(0x13b) !== E(0x13c)) {
            return;
        } else {
            g[E(0x11d)](h);
            i(j, { 'message': 'Internal\x20server\x20error' }, 0x1f4);
        }
    }
    const [e, f] = d[E(0x13d)](':', 0x2);
    if (!e) {
        if (E(0x13e) !== E(0x13f)) {
            return undefined;
        } else {
            f(g, '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>' + h('/register') + E(0x130));
            return;
        }
    }
    const g = await pgClient[E(0x131)](E(0x132), [e]);
    const h = g[E(0x140)][0x0];
    if (!h) {
        if (E(0x141) !== E(0x142)) {
            return undefined;
        } else {
            return f(g, E(0x11b) + h(E(0x143)) + '</script>');
        }
    }
    const i = crypto[E(0x134)]('md5')[E(0x144)](f)['digest'](E(0x136));
    if (h['password'] !== i) {
        return undefined;
    }
    return h;
}
function escapeHtml(c) {
    const F = b;
    return c[F(0x145)](/&/g, F(0x146))[F(0x145)](/</g, F(0x147))[F(0x145)](/>/g, F(0x148))[F(0x145)](/"/g, F(0x149))[F(0x145)](/'/g, F(0x14a));
}
post(t(0x14b), async (c, d) => {
    const G = b;
    const e = c?.[G(0x110)]?.[G(0x14c)]?.[G(0x13d)](G(0x14d))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, G(0x11b) + redirectScript('/login') + G(0x130));
    }
    if (f[G(0x14e)] !== 'admin') {
        if (G(0x14f) === G(0x14f)) {
            return response(d, G(0x150) + redirectScript('/') + '</script>');
        } else {
            return d;
        }
    }
    const {id: g} = parseUrlBody(c[G(0x10c)]);
    await pgClient[G(0x131)](G(0x151), [Number(g)]);
    return response(d, G(0x152) + redirectScript('/') + G(0x130));
});
get('/', async (c, d) => {
    const H = b;
    const e = c?.['headers']?.[H(0x14c)]?.[H(0x13d)]('Authorization=')[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, H(0x11b) + redirectScript('/login') + H(0x130));
    }
    const g = c?.[H(0x115)]?.[H(0x153)]?.[H(0x154)]('q');
    const {rows: h} = await pgClient[H(0x131)]('\x0a\x20\x20SELECT\x20\x22article\x22.\x22id\x22\x20AS\x20\x22id\x22,\x20\x22message\x22,\x20\x22name\x22\x0a\x20\x20FROM\x20\x22article\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22user\x22\x20ON\x20\x22user\x22.\x22id\x22\x20=\x20\x22article\x22.\x22userId\x22\x0a\x20\x20' + (g ? H(0x155) + g + '%\x27' : '') + H(0x156));
    return response(d, H(0x157) + (h?.[H(0x10a)] ? H(0x158) + h[H(0x159)](i => {
        const I = b;
        return I(0x15a) + escapeHtml(i['name']) + I(0x15b) + escapeHtml(i[I(0x15c)]) + '\x20' + (f[I(0x14e)] === 'admin' ? I(0x15d) + i['id'] + I(0x15e) : '') + I(0x15f);
    })[H(0x160)]('\x0a') + H(0x161) : H(0x162)) + H(0x163));
});
post('/', async (c, d) => {
    const J = b;
    const e = c?.[J(0x110)]?.[J(0x14c)]?.[J(0x13d)](J(0x14d))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, J(0x11b) + redirectScript(J(0x143)) + '</script>');
    }
    const g = parseUrlBody(c[J(0x10c)]);
    if (!g?.[J(0x15c)]) {
        return response(d, J(0x164) + redirectScript('/') + J(0x130));
    }
    await pgClient[J(0x131)](J(0x165), [
        g[J(0x15c)],
        f['id']
    ]);
    return response(d, J(0x166) + redirectScript('/') + ';</script>');
});
function a() {
    const L = [
        'No\x20articles\x20found',
        '\x0a\x20\x20<br>\x0a\x20\x20<form\x20method=\x22post\x22\x20>\x0a\x20\x20<label>Message</label>\x20<input\x20name=\x22message\x22><br>\x0a\x20\x20<button\x20type=\x22submit\x22>Add\x20article</button>\x0a</form>\x0a</html>\x0a\x20\x20',
        '<h1>No\x20article\x20name\x20provided</h1><script>',
        'INSERT\x20INTO\x20\x22article\x22(\x22message\x22,\x20\x22userId\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Article\x20succesfully\x20added</h1><script>',
        'postgres',
        'localhost',
        'connect',
        '590339SmGCQJ',
        '2113258LnUhwh',
        '3gHpCic',
        '1343436RFJwgJ',
        '5BhlIYB',
        '1155132yJmXEO',
        '161SpxjKA',
        '224648jubfXx',
        '556137pMcmJB',
        '40xqwALL',
        '1835141WuKBGW',
        'crypto',
        '127.0.0.1',
        'method',
        'POST',
        'eIvqN',
        'length',
        'destroy',
        'body',
        'socket',
        'remoteAddress',
        'createServer',
        'headers',
        'origin',
        'setHeader',
        'Access-Control-Request-Method',
        'Access-Control-Allow-Headers',
        'parsedUrl',
        'http://',
        'url',
        'pathname',
        'DfKxV',
        'MjHMI',
        '<h1>User\x20not\x20logged\x20in</h1><script>',
        'Not\x20found',
        'error',
        'Internal\x20server\x20error',
        'push',
        'GET',
        'write',
        'string',
        'stringify',
        'end',
        'listen',
        'log',
        'Server\x20running\x20at\x20http://',
        'fromEntries',
        'entries',
        '\x0a<html\x20lang=\x22en\x22>\x0a<form\x20method=\x22post\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Register</button>\x0a</form>\x0a<p>Want\x20to\x20login?<a\x20href=\x22/login\x22>Click\x20here</a></p>\x0a</html>\x0a',
        'setTimeout(()\x20=>\x20window.location=\x27',
        '\x27,\x202000)',
        '/register',
        'password',
        '<h1>Invalid\x20form</h1><script>',
        '</script>',
        'query',
        'SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1',
        'name',
        'createHash',
        'digest',
        'hex',
        'INSERT\x20INTO\x20\x22user\x22(\x22name\x22,\x20\x22password\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Successfully\x20registered</h1><script>',
        'from',
        'base64',
        'XVSAP',
        'XOcAX',
        'split',
        'SZVkZ',
        'JNBGq',
        'rows',
        'xPBqH',
        'nTPtY',
        '/login',
        'update',
        'replace',
        '&amp;',
        '&lt;',
        '&gt;',
        '&quot;',
        '&#39;',
        '/delete',
        'cookie',
        'Authorization=',
        'role',
        'PYMLV',
        '<h1>Must\x20be\x20admin</h1><script>',
        'DELETE\x20FROM\x20\x22article\x22\x20WHERE\x20\x22id\x22\x20=\x20$1',
        '<h1>Article\x20sucessfully\x20deleted</h1><script>',
        'searchParams',
        'get',
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
        '\x0a\x20\x20</ul>'
    ];
    a = function () {
        return L;
    };
    return a();
}
async function main() {
    const K = b;
    pgClient = new Client({
        'user': K(0x167),
        'host': K(0x168),
        'database': K(0x167),
        'password': 'qwerty',
        'port': 0x1538
    });
    await pgClient[K(0x169)]();
    listen();
}
main();