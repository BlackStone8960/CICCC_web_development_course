const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.end(
    `
      <html>
        <head>
          <title>First Node App</title>
        </head>
        <body>
          <h1>Hello, world!</h1>
        </body>
      </html>
    `
  );
});

server.listen(port, () => {
  console.log(`This is my first node server!`);
});