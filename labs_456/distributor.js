const http = require('http');
const crypto = require('crypto');
const fs = require('fs');

const installerHash = '5f4d3dcae54829655152b64d7a762d22';

function hash(s) {
  return crypto.createHash('md5').update(s).digest('hex');
}

const s = http.createServer((req, res) => {
  const providedInstallerHash = req.headers['installer-hash'];
  if (!providedInstallerHash || providedInstallerHash !== installerHash) {
    res.writeHead(400);
    res.end();
    return;
  }
  const systemInfo = req.headers['system-info'];
  if (!systemInfo) {
    res.writeHead(400);
    res.end();
    return;
  }
  const code = ``;

  const file = code + fs.readFileSync('./index.js').toString();

  res.writeHead(200);
  res.write(file);
  res.end();
});

s.listen(3000);
