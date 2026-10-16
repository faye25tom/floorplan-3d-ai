const http = require('http');
const fs = require('fs');
const path = require('path');

let port = 8088;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function startServer(p) {
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(__dirname, reqPath);
    
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`端口 ${p} 已被占用，正在尝试下一个端口 ${p + 1}...`);
      startServer(p + 1);
    } else {
      console.error('服务器启动异常:', err);
    }
  });

  server.listen(p, '127.0.0.1', () => {
    console.log(`\n==================================================`);
    console.log(`  🏠 户型装修设计 3D 本地服务已启动成功！`);
    console.log(`  👉 浏览器访问地址: http://127.0.0.1:${p}/`);
    console.log(`==================================================\n`);
  });
}

startServer(port);
