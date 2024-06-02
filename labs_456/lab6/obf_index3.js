const t = b;
(function (c, d) {
    const s = b;
    const e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xde)) / 0x1 * (-parseInt(s(0xdf)) / 0x2) + -parseInt(s(0xe0)) / 0x3 * (parseInt(s(0xe1)) / 0x4) + -parseInt(s(0xe2)) / 0x5 + parseInt(s(0xe3)) / 0x6 * (-parseInt(s(0xe4)) / 0x7) + parseInt(s(0xe5)) / 0x8 * (-parseInt(s(0xe6)) / 0x9) + -parseInt(s(0xe7)) / 0xa + -parseInt(s(0xe8)) / 0xb * (-parseInt(s(0xe9)) / 0xc);
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb390f));
const http = require(t(0xea));
const {Client} = require('pg');
const crypto = require(t(0xeb));
const hostname = t(0xec);
const port = 0xbb9;
const handlers = [];
const MAX_LENGTH = 0xf4240;
async function parseBody(c) {
    const u = b;
    if (c[u(0xed)] !== u(0xee)) {
        return;
    }
    let d = '';
    for await (const e of c) {
        if (u(0xef) !== u(0xef)) {
            d['destroy']();
        } else {
            d += e;
            if (d[u(0xf0)] > MAX_LENGTH) {
                if (u(0xf1) !== u(0xf1)) {
                    f[u(0xf2)]('Server\x20running\x20at\x20http://' + g + ':' + h + '/');
                } else {
                    c[u(0xf3)]();
                }
            }
        }
    }
    c[u(0xf4)] = d;
}
let loggedTimes = {};
const RPS = 0x64;
function rateLimit(c, d) {
    const v = b;
    const e = c['socket'][v(0xf5)];
    const f = loggedTimes[e] ?? 0x0;
    if (f > RPS) {
        return d[v(0xf3)]();
    }
    loggedTimes[e] = f + 0x1;
}
setInterval(() => loggedTimes = {}, 0x3e8);
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0xde;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
const server = http[t(0xf6)](async (c, d) => {
    const w = b;
    try {
        d['setHeader'](w(0xf7), c?.[w(0xf8)]?.['origin'] ?? '*');
        d['setHeader'](w(0xf9), '*');
        d[w(0xfa)]('Access-Control-Allow-Methods', w(0xfb));
        d[w(0xfa)](w(0xfc), '*');
        if (c[w(0xed)] === w(0xfd)) {
            d[w(0xfe)](0xcc);
            d[w(0xff)]();
            return;
        }
        rateLimit(c, d);
        c[w(0x100)] = new URL('http://' + hostname + ':' + port + c[w(0x101)]);
        for (const f of handlers) {
            if (c['method'] === f[w(0xed)] && c[w(0x100)][w(0x102)] === f[w(0x103)]) {
                if ('iAhkp' === w(0x104)) {
                    return w(0x105) + i(j['name']) + w(0x106) + k(l[w(0x107)]) + '\x20' + (m[w(0x108)] === w(0x109) ? w(0x10a) + n['id'] + w(0x10b) : '') + '</li>';
                } else {
                    await parseBody(c);
                    let h = f[w(0x10c)](c, d);
                    if (h instanceof Promise) {
                        h = await h;
                    }
                    return;
                }
            }
        }
        response(d, { 'message': 'Not\x20found' }, 0x194);
    } catch (i) {
        if ('WxuEq' !== w(0x10d)) {
            console[w(0x10e)](i);
            response(d, { 'message': w(0x10f) }, 0x1f4);
        } else {
            return d;
        }
    }
});
function post(c, d) {
    const x = b;
    handlers['push']({
        'route': c,
        'method': x(0xee),
        'listener': d
    });
}
function get(c, d) {
    const y = b;
    handlers[y(0x110)]({
        'route': c,
        'method': y(0x111),
        'listener': d
    });
}
function response(c, d, e = 0xc8) {
    const z = b;
    c['statusCode'] = e;
    c[z(0x112)](typeof d === z(0x113) ? d : JSON[z(0x114)](d));
    c[z(0xff)]();
}
function listen() {
    server['listen'](port, hostname, () => {
        const A = b;
        if (A(0x115) === A(0x115)) {
            console['log'](A(0x116) + hostname + ':' + port + '/');
        } else {
            return f(g, '<h1>User\x20not\x20logged\x20in</h1><script>' + h(A(0x117)) + A(0x118));
        }
    });
}
function parseUrlBody(c) {
    const B = b;
    return Object[B(0x119)](new URLSearchParams(c)[B(0x11a)]());
}
const loginHtml = t(0x11b);
get(t(0x117), (c, d) => {
    response(d, loginHtml);
});
const registerHtml = t(0x11c);
const redirectScript = c => t(0x11d) + c + t(0x11e);
get(t(0x11f), (c, d) => {
    response(d, registerHtml);
});
post(t(0x11f), async (c, d) => {
    const C = b;
    const e = parseUrlBody(c[C(0xf4)]);
    if (!e?.['name'] || !e?.[C(0x120)]) {
        if (C(0x121) !== C(0x122)) {
            response(d, '<h1>Invalid\x20form</h1><script>' + redirectScript(C(0x11f)) + C(0x118));
            return;
        } else {
            return f(g, '<h1>No\x20article\x20name\x20provided</h1><script>' + h('/') + C(0x118));
        }
    }
    const {rows: f} = await pgClient[C(0x123)](C(0x124), [e[C(0x125)]]);
    const g = f[0x0];
    if (g) {
        response(d, C(0x126) + redirectScript(C(0x11f)) + C(0x118));
        return;
    }
    const h = crypto[C(0x127)]('md5')[C(0x128)](e[C(0x120)])[C(0x129)](C(0x12a));
    await pgClient[C(0x123)](C(0x12b), [
        e[C(0x125)],
        h
    ]);
    return response(d, C(0x12c) + redirectScript('/login') + C(0x118));
});
let pgClient;
async function getAuthUser(c) {
    const D = b;
    if (!c) {
        return;
    }
    const d = Buffer[D(0x12d)](c, D(0x12e))[D(0x12f)]();
    if (!d) {
        return;
    }
    const [e, f] = d[D(0x130)](':', 0x2);
    if (!e) {
        if (D(0x131) !== 'ozaPh') {
            return undefined;
        } else {
            return f(g, D(0x132) + h('/') + D(0x118));
        }
    }
    const g = await pgClient[D(0x123)]('SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1', [e]);
    const h = g[D(0x133)][0x0];
    if (!h) {
        return undefined;
    }
    const i = crypto['createHash'](D(0x134))['update'](f)[D(0x129)](D(0x12a));
    if (h[D(0x120)] !== i) {
        return undefined;
    }
    return h;
}
function escapeHtml(c) {
    const E = b;
    return c['replace'](/&/g, E(0x135))[E(0x136)](/</g, '&lt;')['replace'](/>/g, E(0x137))[E(0x136)](/"/g, E(0x138))['replace'](/'/g, '&#39;');
}
function a() {
    const L = [
        '<h1>Must\x20be\x20admin</h1><script>',
        'rows',
        'md5',
        '&amp;',
        'replace',
        '&gt;',
        '&quot;',
        '/delete',
        'Authorization=',
        'dCJQB',
        'listen',
        'DELETE\x20FROM\x20\x22article\x22\x20WHERE\x20\x22id\x22\x20=\x20$1',
        '<h1>Article\x20sucessfully\x20deleted</h1><script>',
        '<h1>User\x20not\x20logged\x20in</h1><script>',
        'searchParams',
        'get',
        '\x0a\x20\x20SELECT\x20\x22article\x22.\x22id\x22\x20AS\x20\x22id\x22,\x20\x22message\x22,\x20\x22name\x22\x0a\x20\x20FROM\x20\x22article\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22user\x22\x20ON\x20\x22user\x22.\x22id\x22\x20=\x20\x22article\x22.\x22userId\x22\x0a\x20\x20',
        'WHERE\x20\x22message\x22\x20ILIKE\x20\x27',
        '\x0a\x20\x20',
        '\x0a<html\x20lang=\x22en\x22>\x0a',
        '\x0a<form>\x0a<label>Search</label>:<input\x20type=\x22search\x22\x20id=\x22q\x22\x20name=\x22q\x22\x20/><br>\x0a<button\x20type=\x22submit\x22>Search!</button>\x0a</form>\x0a<ul>\x0a\x20\x20',
        'map',
        'join',
        '\x0a\x20\x20</ul>',
        'No\x20articles\x20found',
        '\x0a\x20\x20<br>\x0a\x20\x20<form\x20method=\x22post\x22\x20>\x0a\x20\x20<label>Message</label>\x20<input\x20name=\x22message\x22><br>\x0a\x20\x20<button\x20type=\x22submit\x22>Add\x20article</button>\x0a</form>\x0a</html>\x0a\x20\x20',
        'cookie',
        'sXAnQ',
        'YxIqX',
        '<h1>No\x20article\x20name\x20provided</h1><script>',
        'INSERT\x20INTO\x20\x22article\x22(\x22message\x22,\x20\x22userId\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Article\x20succesfully\x20added</h1><script>',
        'postgres',
        'localhost',
        'connect',
        '2NbpPpD',
        '303432JHjJrJ',
        '33501JnKEwz',
        '12wbbGLl',
        '3176705jgEkcJ',
        '1884lluRAb',
        '25599kXwjbT',
        '21368fxeKij',
        '1737IZRanM',
        '13199180rTGLXX',
        '132zfFpzC',
        '4691496EiFPMQ',
        'http',
        'crypto',
        '127.0.0.1',
        'method',
        'POST',
        'dHVhv',
        'length',
        'TpFia',
        'log',
        'destroy',
        'body',
        'remoteAddress',
        'createServer',
        'Access-Control-Allow-Origin',
        'headers',
        'Access-Control-Request-Method',
        'setHeader',
        'OPTIONS,\x20GET',
        'Access-Control-Allow-Headers',
        'OPTIONS',
        'writeHead',
        'end',
        'parsedUrl',
        'url',
        'pathname',
        'route',
        'wVdCL',
        '<li>Author:\x20',
        '.\x20Text:\x20',
        'message',
        'role',
        'admin',
        '<form\x20method=\x22post\x22\x20action=\x22/delete\x22><input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=',
        '><button\x20type=\x22submit\x22>Delete</button></form>',
        'listener',
        'FZFhT',
        'error',
        'Internal\x20server\x20error',
        'push',
        'GET',
        'write',
        'string',
        'stringify',
        'fdJxo',
        'Server\x20running\x20at\x20http://',
        '/login',
        '</script>',
        'fromEntries',
        'entries',
        '\x0a<html\x20lang=\x22en\x22>\x0a<body>\x0a<form\x20id=\x22login-form\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Login</button>\x0a</form>\x0a<p>Want\x20to\x20register?<a\x20href=\x22/register\x22>Click\x20here</a></p>\x0a</body>\x0a<script>\x0adocument.getElementById(\x27login-form\x27).addEventListener(\x27submit\x27,\x20ev\x20=>\x20{\x0a\x20\x20ev.preventDefault();\x0a\x20\x20const\x20{\x20name,\x20password\x20}\x20=\x20Object.fromEntries(new\x20FormData(ev.target).entries());\x0a\x0a\x20\x20document.cookie\x20=\x20`Authorization=${btoa(`${name}:${password}`)}`;\x0a\x20\x20window.location\x20=\x20\x27/\x27;\x0a});\x0a</script>\x0a</html>\x0a',
        '\x0a<html\x20lang=\x22en\x22>\x0a<form\x20method=\x22post\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Register</button>\x0a</form>\x0a<p>Want\x20to\x20login?<a\x20href=\x22/login\x22>Click\x20here</a></p>\x0a</html>\x0a',
        'setTimeout(()\x20=>\x20window.location=\x27',
        '\x27,\x202000)',
        '/register',
        'password',
        'KEJoX',
        'UlqLY',
        'query',
        'SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1',
        'name',
        '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>',
        'createHash',
        'update',
        'digest',
        'hex',
        'INSERT\x20INTO\x20\x22user\x22(\x22name\x22,\x20\x22password\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Successfully\x20registered</h1><script>',
        'from',
        'base64',
        'toString',
        'split',
        'MxxYS'
    ];
    a = function () {
        return L;
    };
    return a();
}
post(t(0x139), async (c, d) => {
    const F = b;
    const e = c?.[F(0xf8)]?.['cookie']?.[F(0x130)](F(0x13a))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, '<h1>User\x20not\x20logged\x20in</h1><script>' + redirectScript(F(0x117)) + '</script>');
    }
    if (f['role'] !== F(0x109)) {
        if (F(0x13b) === 'dCJQB') {
            return response(d, F(0x132) + redirectScript('/') + '</script>');
        } else {
            i[F(0x13c)](j, k, () => {
                const G = b;
                o[G(0xf2)](G(0x116) + p + ':' + q + '/');
            });
        }
    }
    const {id: g} = parseUrlBody(c[F(0xf4)]);
    await pgClient[F(0x123)](F(0x13d), [Number(g)]);
    return response(d, F(0x13e) + redirectScript('/') + F(0x118));
});
get('/', async (c, d) => {
    const H = b;
    const e = c?.[H(0xf8)]?.['cookie']?.[H(0x130)]('Authorization=')[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, H(0x13f) + redirectScript('/login') + '</script>');
    }
    const g = c?.[H(0x100)]?.[H(0x140)]?.[H(0x141)]('q');
    const {rows: h} = await pgClient['query'](H(0x142) + (g ? H(0x143) + g + '%\x27' : '') + H(0x144));
    return response(d, H(0x145) + (h?.[H(0xf0)] ? H(0x146) + h[H(0x147)](i => {
        const I = b;
        return I(0x105) + escapeHtml(i[I(0x125)]) + I(0x106) + escapeHtml(i[I(0x107)]) + '\x20' + (f[I(0x108)] === I(0x109) ? '<form\x20method=\x22post\x22\x20action=\x22/delete\x22><input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=' + i['id'] + I(0x10b) : '') + '</li>';
    })[H(0x148)]('\x0a') + H(0x149) : H(0x14a)) + H(0x14b));
});
post('/', async (c, d) => {
    const J = b;
    const e = c?.[J(0xf8)]?.[J(0x14c)]?.[J(0x130)](J(0x13a))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, '<h1>User\x20not\x20logged\x20in</h1><script>' + redirectScript(J(0x117)) + J(0x118));
    }
    const g = parseUrlBody(c[J(0xf4)]);
    if (!g?.['message']) {
        if (J(0x14d) !== J(0x14e)) {
            return response(d, J(0x14f) + redirectScript('/') + '</script>');
        } else {
            f[J(0x110)]({
                'route': g,
                'method': 'GET',
                'listener': h
            });
        }
    }
    await pgClient[J(0x123)](J(0x150), [
        g[J(0x107)],
        f['id']
    ]);
    return response(d, J(0x151) + redirectScript('/') + ';</script>');
});
async function main() {
    const K = b;
    pgClient = new Client({
        'user': K(0x152),
        'host': K(0x153),
        'database': K(0x152),
        'password': 'qwerty',
        'port': 0x1538
    });
    await pgClient[K(0x154)]();
    listen();
}
main();