const { createServer } = require('http')

let statusCode = 200;

const server = createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hello World\n');
  }

  if(req.url === '/health'){
    if(statusCode === 500){
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('FAIL\n');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK\n');
  }


  res.writeHead(200, { 'Content-Type': 'text/plain' });
  return res.end('Default route\n');

});

const startCounting = () => {
  let counter = 0;
  setInterval(() => {
    counter++;
    if(counter % 10 === 0){
      statusCode = 500;
      return;
    }
    statusCode = 200
  }, 1000);
}

server.listen(3000, () => {
  console.log('Server listening on port 3000')
  console.log('initializing health check')
  startCounting();
})