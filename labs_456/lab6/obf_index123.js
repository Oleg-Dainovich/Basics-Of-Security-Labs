const t = b;
function a() {
    const L = [
        'end',
        'listen',
        'log',
        'fromEntries',
        'entries',
        '\x0a<html\x20lang=\x22en\x22>\x0a<body>\x0a<form\x20id=\x22login-form\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Login</button>\x0a</form>\x0a<p>Want\x20to\x20register?<a\x20href=\x22/register\x22>Click\x20here</a></p>\x0a</body>\x0a<script>\x0adocument.getElementById(\x27login-form\x27).addEventListener(\x27submit\x27,\x20ev\x20=>\x20{\x0a\x20\x20ev.preventDefault();\x0a\x20\x20const\x20{\x20name,\x20password\x20}\x20=\x20Object.fromEntries(new\x20FormData(ev.target).entries());\x0a\x0a\x20\x20document.cookie\x20=\x20`Authorization=${btoa(`${name}:${password}`)}`;\x0a\x20\x20window.location\x20=\x20\x27/\x27;\x0a});\x0a</script>\x0a</html>\x0a',
        '/login',
        '\x0a<html\x20lang=\x22en\x22>\x0a<form\x20method=\x22post\x22>\x0a<label>Name</label><input\x20name=\x22name\x22><br>\x0a<label>Password</label><input\x20name=\x22password\x22\x20type=\x22password\x22><br>\x0a<button\x20type=\x22submit\x22>Register</button>\x0a</form>\x0a<p>Want\x20to\x20login?<a\x20href=\x22/login\x22>Click\x20here</a></p>\x0a</html>\x0a',
        'setTimeout(()\x20=>\x20window.location=\x27',
        '\x27,\x202000)',
        '/register',
        'password',
        '<h1>Invalid\x20form</h1><script>',
        'name',
        'xVYyK',
        'writeHead',
        '<h1>User\x20with\x20this\x20name\x20already\x20exists</h1><script>',
        '</script>',
        'createHash',
        'md5',
        'update',
        'query',
        'INSERT\x20INTO\x20\x22user\x22(\x22name\x22,\x20\x22password\x22)\x20VALUES\x20($1,\x20$2)',
        '<h1>Successfully\x20registered</h1><script>',
        'AeFaz',
        'base64',
        'toString',
        'XRxKt',
        'vTOpl',
        'split',
        'KzWWj',
        'digest',
        'hex',
        '&amp;',
        'replace',
        '&lt;',
        '&gt;',
        '&quot;',
        '&#39;',
        '/delete',
        'Authorization=',
        '<h1>User\x20not\x20logged\x20in</h1><script>',
        'role',
        'admin',
        'HYZLy',
        'DELETE\x20FROM\x20\x22article\x22\x20WHERE\x20\x22id\x22\x20=\x20$1',
        'cookie',
        'searchParams',
        '\x0a\x20\x20SELECT\x20\x22article\x22.\x22id\x22\x20AS\x20\x22id\x22,\x20\x22message\x22,\x20\x22name\x22\x0a\x20\x20FROM\x20\x22article\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22user\x22\x20ON\x20\x22user\x22.\x22id\x22\x20=\x20\x22article\x22.\x22userId\x22\x0a\x20\x20',
        '\x0a\x20\x20',
        '\x0a<html\x20lang=\x22en\x22>\x0a',
        '\x0a<form>\x0a<label>Search</label>:<input\x20type=\x22search\x22\x20id=\x22q\x22\x20name=\x22q\x22\x20/><br>\x0a<button\x20type=\x22submit\x22>Search!</button>\x0a</form>\x0a<ul>\x0a\x20\x20',
        'map',
        '.\x20Text:\x20',
        'message',
        '<form\x20method=\x22post\x22\x20action=\x22/delete\x22><input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=',
        '><button\x20type=\x22submit\x22>Delete</button></form>',
        '</li>',
        'join',
        '\x0a\x20\x20</ul>',
        'No\x20articles\x20found',
        '\x0a\x20\x20<br>\x0a\x20\x20<form\x20method=\x22post\x22\x20>\x0a\x20\x20<label>Message</label>\x20<input\x20name=\x22message\x22><br>\x0a\x20\x20<button\x20type=\x22submit\x22>Add\x20article</button>\x0a</form>\x0a</html>\x0a\x20\x20',
        'naEoI',
        'REdBZ',
        '<h1>No\x20article\x20name\x20provided</h1><script>',
        '<h1>Article\x20succesfully\x20added</h1><script>',
        'postgres',
        'localhost',
        'qwerty',
        'connect',
        '1kuswAp',
        '80266JumEjE',
        '3bRWJQC',
        '727576CVAZqF',
        '1578285ZrggxZ',
        '6qydFHm',
        '14efoumh',
        '1493432GLnROl',
        '9hYAkNI',
        '2742920syyxIk',
        '1108151SsdHLz',
        '12JgVyCv',
        '156kBdsmr',
        '125006ubfUwZ',
        'crypto',
        '127.0.0.1',
        'method',
        'POST',
        'length',
        'destroy',
        'body',
        'socket',
        'remoteAddress',
        'VDvBq',
        'createServer',
        'setHeader',
        'Access-Control-Allow-Origin',
        'headers',
        'origin',
        'Access-Control-Request-Method',
        'Access-Control-Allow-Headers',
        'OPTIONS',
        'Vqfjk',
        'ILFqx',
        'parsedUrl',
        'http://',
        'url',
        'route',
        'PoQHK',
        'listener',
        'Not\x20found',
        'error',
        'push',
        'GET',
        'write',
        'stringify'
    ];
    a = function () {
        return L;
    };
    return a();
}
(function (c, d) {
    const s = b;
    const e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1ee)) / 0x1 * (-parseInt(s(0x1ef)) / 0x2) + -parseInt(s(0x1f0)) / 0x3 * (parseInt(s(0x1f1)) / 0x4) + -parseInt(s(0x1f2)) / 0x5 * (parseInt(s(0x1f3)) / 0x6) + -parseInt(s(0x1f4)) / 0x7 * (-parseInt(s(0x1f5)) / 0x8) + parseInt(s(0x1f6)) / 0x9 * (parseInt(s(0x1f7)) / 0xa) + parseInt(s(0x1f8)) / 0xb * (-parseInt(s(0x1f9)) / 0xc) + parseInt(s(0x1fa)) / 0xd * (parseInt(s(0x1fb)) / 0xe);
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3001f));
const http = require('http');
const {Client} = require('pg');
const crypto = require(t(0x1fc));
const hostname = t(0x1fd);
const port = 0xbb9;
const handlers = [];
const MAX_LENGTH = 0xf4240;
async function parseBody(c) {
    const u = b;
    if (c[u(0x1fe)] !== u(0x1ff)) {
        return;
    }
    let d = '';
    for await (const e of c) {
        d += e;
        if (d[u(0x200)] > MAX_LENGTH) {
            c[u(0x201)]();
        }
    }
    c[u(0x202)] = d;
}
let loggedTimes = {};
const RPS = 0x64;
function rateLimit(c, d) {
    const v = b;
    const e = c[v(0x203)][v(0x204)];
    const f = loggedTimes[e] ?? 0x0;
    if (f > RPS) {
        if (v(0x205) !== v(0x205)) {
            return d;
        } else {
            return d[v(0x201)]();
        }
    }
    loggedTimes[e] = f + 0x1;
}
setInterval(() => loggedTimes = {}, 0x3e8);
const server = http[t(0x206)](async (c, d) => {
    const w = b;
    try {
        d[w(0x207)](w(0x208), c?.[w(0x209)]?.[w(0x20a)] ?? '*');
        d[w(0x207)](w(0x20b), '*');
        d[w(0x207)]('Access-Control-Allow-Methods', 'OPTIONS,\x20GET');
        d['setHeader'](w(0x20c), '*');
        if (c[w(0x1fe)] === w(0x20d)) {
            if (w(0x20e) === w(0x20f)) {
                h += i;
                if (j[w(0x200)] > k) {
                    m[w(0x201)]();
                }
            } else {
                d['writeHead'](0xcc);
                d['end']();
                return;
            }
        }
        rateLimit(c, d);
        c[w(0x210)] = new URL(w(0x211) + hostname + ':' + port + c[w(0x212)]);
        for (const g of handlers) {
            if (c[w(0x1fe)] === g[w(0x1fe)] && c[w(0x210)]['pathname'] === g[w(0x213)]) {
                if (w(0x214) !== 'Rocay') {
                    await parseBody(c);
                    let h = g[w(0x215)](c, d);
                    if (h instanceof Promise) {
                        h = await h;
                    }
                    return;
                } else {
                    return;
                }
            }
        }
        response(d, { 'message': w(0x216) }, 0x194);
    } catch (j) {
        console[w(0x217)](j);
        response(d, { 'message': 'Internal\x20server\x20error' }, 0x1f4);
    }
});
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0x1ee;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
function post(c, d) {
    const x = b;
    handlers['push']({
        'route': c,
        'method': x(0x1ff),
        'listener': d
    });
}
function get(c, d) {
    const y = b;
    handlers[y(0x218)]({
        'route': c,
        'method': y(0x219),
        'listener': d
    });
}
function response(c, d, e = 0xc8) {
    const z = b;
    c['statusCode'] = e;
    c[z(0x21a)](typeof d === 'string' ? d : JSON[z(0x21b)](d));
    c[z(0x21c)]();
}
function listen() {
    const A = b;
    server[A(0x21d)](port, hostname, () => {
        const B = b;
        console[B(0x21e)]('Server\x20running\x20at\x20http://' + hostname + ':' + port + '/');
    });
}
function parseUrlBody(c) {
    const C = b;
    return Object[C(0x21f)](new URLSearchParams(c)[C(0x220)]());
}
const loginHtml = t(0x221);
get(t(0x222), (c, d) => {
    response(d, loginHtml);
});
const registerHtml = t(0x223);
const redirectScript = c => t(0x224) + c + t(0x225);
get('/register', (c, d) => {
    response(d, registerHtml);
});
post(t(0x226), async (c, d) => {
    const D = b;
    const e = parseUrlBody(c[D(0x202)]);
    if (!e?.['name'] || !e?.[D(0x227)]) {
        response(d, D(0x228) + redirectScript(D(0x226)) + '</script>');
        return;
    }
    const {rows: f} = await pgClient['query']('SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1', [e[D(0x229)]]);
    const g = f[0x0];
    if (g) {
        if ('xVYyK' !== D(0x22a)) {
            e[D(0x22b)](0xcc);
            f['end']();
            return;
        } else {
            response(d, D(0x22c) + redirectScript('/register') + D(0x22d));
            return;
        }
    }
    const h = crypto[D(0x22e)](D(0x22f))[D(0x230)](e[D(0x227)])['digest']('hex');
    await pgClient[D(0x231)](D(0x232), [
        e[D(0x229)],
        h
    ]);
    return response(d, D(0x233) + redirectScript(D(0x222)) + D(0x22d));
});
let pgClient;
async function getAuthUser(c) {
    const E = b;
    if (!c) {
        if ('BxVGg' !== E(0x234)) {
            return;
        } else {
            return;
        }
    }
    const d = Buffer['from'](c, E(0x235))[E(0x236)]();
    if (!d) {
        if (E(0x237) === E(0x238)) {
            f[E(0x21e)]('Server\x20running\x20at\x20http://' + g + ':' + h + '/');
        } else {
            return;
        }
    }
    const [e, f] = d[E(0x239)](':', 0x2);
    if (!e) {
        return undefined;
    }
    const g = await pgClient[E(0x231)]('SELECT\x20*\x20FROM\x20\x22user\x22\x20WHERE\x20\x22name\x22\x20=\x20$1', [e]);
    const h = g['rows'][0x0];
    if (!h) {
        if (E(0x23a) !== E(0x23a)) {
            f(g, h);
        } else {
            return undefined;
        }
    }
    const i = crypto['createHash'](E(0x22f))[E(0x230)](f)[E(0x23b)](E(0x23c));
    if (h[E(0x227)] !== i) {
        return undefined;
    }
    return h;
}
function escapeHtml(c) {
    const F = b;
    return c['replace'](/&/g, F(0x23d))[F(0x23e)](/</g, F(0x23f))['replace'](/>/g, F(0x240))[F(0x23e)](/"/g, F(0x241))[F(0x23e)](/'/g, F(0x242));
}
post(t(0x243), async (c, d) => {
    const G = b;
    const e = c?.[G(0x209)]?.['cookie']?.['split'](G(0x244))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, G(0x245) + redirectScript(G(0x222)) + G(0x22d));
    }
    if (f[G(0x246)] !== G(0x247)) {
        if (G(0x248) === 'IJJSK') {
            f[G(0x218)]({
                'route': g,
                'method': G(0x219),
                'listener': h
            });
        } else {
            return response(d, '<h1>Must\x20be\x20admin</h1><script>' + redirectScript('/') + G(0x22d));
        }
    }
    const {id: g} = parseUrlBody(c['body']);
    await pgClient[G(0x231)](G(0x249), [Number(g)]);
    return response(d, '<h1>Article\x20sucessfully\x20deleted</h1><script>' + redirectScript('/') + G(0x22d));
});
get('/', async (c, d) => {
    const H = b;
    const e = c?.[H(0x209)]?.[H(0x24a)]?.[H(0x239)](H(0x244))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, H(0x245) + redirectScript(H(0x222)) + H(0x22d));
    }
    const g = c?.['parsedUrl']?.[H(0x24b)]?.['get']('q');
    const {rows: h} = await pgClient[H(0x231)](H(0x24c) + (g ? 'WHERE\x20\x22message\x22\x20ILIKE\x20\x27' + g + '%\x27' : '') + H(0x24d));
    return response(d, H(0x24e) + (h?.[H(0x200)] ? H(0x24f) + h[H(0x250)](i => {
        const I = b;
        return '<li>Author:\x20' + escapeHtml(i[I(0x229)]) + I(0x251) + escapeHtml(i[I(0x252)]) + '\x20' + (f['role'] === I(0x247) ? I(0x253) + i['id'] + I(0x254) : '') + I(0x255);
    })[H(0x256)]('\x0a') + H(0x257) : H(0x258)) + H(0x259));
});
post('/', async (c, d) => {
    const J = b;
    const e = c?.['headers']?.[J(0x24a)]?.[J(0x239)](J(0x244))[0x1];
    const f = await getAuthUser(e);
    if (!f) {
        return response(d, J(0x245) + redirectScript('/login') + '</script>');
    }
    const g = parseUrlBody(c[J(0x202)]);
    if (!g?.[J(0x252)]) {
        if (J(0x25a) === J(0x25b)) {
            g['error'](h);
            i(j, { 'message': 'Internal\x20server\x20error' }, 0x1f4);
        } else {
            return response(d, J(0x25c) + redirectScript('/') + J(0x22d));
        }
    }
    await pgClient[J(0x231)]('INSERT\x20INTO\x20\x22article\x22(\x22message\x22,\x20\x22userId\x22)\x20VALUES\x20($1,\x20$2)', [
        g[J(0x252)],
        f['id']
    ]);
    return response(d, J(0x25d) + redirectScript('/') + ';</script>');
});
async function main() {
    const K = b;
    pgClient = new Client({
        'user': K(0x25e),
        'host': K(0x25f),
        'database': 'postgres',
        'password': K(0x260),
        'port': 0x1538
    });
    await pgClient[K(0x261)]();
    listen();
}
main();