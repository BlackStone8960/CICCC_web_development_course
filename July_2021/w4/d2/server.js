const http = require('http');
const date = require('./date');

const port = 8080;

const server = http.createServer((req, res) => {
  let dateInfo;
  switch(req.url) {
    case '/' :
      dateInfo = `${date.year} / ${date.month} / ${date.day}`;
      break;
    case '/day' :
      dateInfo = `${date.day}`;
      break;
    case '/month' :
      dateInfo = `${date.month}`;
      break;
    case '/year' :
      dateInfo = `${date.year}`;
      break;
    default :
      break;
  }
  res.end(
    `
      <html>
        <head>
          <title>What's the date today?</title>
        </head>
        <body>
          <h2>It's ${dateInfo}.</h2>
        </body>
      </html>
    `
  );
});

server.listen(port, () => {
  console.log(`What's the date today?`);
});