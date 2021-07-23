const http = require('http');
const random = require('./random');
const port = 8080;

const THRESHOLD_LOSE = 1 / 3;
const THRESHOLD_WIN = 2 / 3;

const server = http.createServer((req, res) => {
  switch(req.url) {
    case '/':
      let result = "Waiting for your challenge.";
      const randomNum = random();
      if (randomNum < THRESHOLD_LOSE) {
        result = "YOU LOSE";
      } else if (THRESHOLD_LOSE <= randomNum && randomNum < THRESHOLD_WIN) {
        result = "DRAW";
      } else if (THRESHOLD_WIN <= randomNum) {
        result = "YOU WIN!";
      }
      content = `
        <div>
          <h2>
            ${result}
          </h2>
        </div>  
        <div>
          <a href="/">Try again</a>
        </div>
      `;
      break;
    case '/aboutus':
      content = `
        <div>
          <p>
            Janken (じゃん拳 janken) is the Japanese equivalent of Rock Paper Scissors, but taken to a whole new level in terms of usage and importance in daily life. If there is ever a clash of opinions between two people in Japan, more often than not this potentially embarassing situation will be decided with janken. Who gets to eat the last Rolo, you or me? What DVD should we rent, Terminator 2 or She's All That? Who should take the rap for our company's bankruptcy? etc. Japanese children will play janken tens if not hundreds of times a day, so it's important to know about janken if you're going to be teaching in schools.
          </p>
          <div>
            <span>Reference: 
              <a href="https://jet.fandom.com/wiki/Janken" target="_blank" rel="noopener noreferrer">https://jet.fandom.com/wiki/Janken</a>
            </span>
          </div>
        </div>
      `
      break;
    case '/contact':
      content = `
        <form>
          <div>
            <label>
              <div>Name</div>
              <input type="text"/>
            </label>
          </div>
          <div>
            <label>
              <div>Email</div>
              <input type="email"/>
            </label>
          </div>
          <div>
            <label>
              <div>Message</div>
              <textarea rows="4" cols="50" placeholder="Input your message"></textarea>
            </label>
          </div>
        </form>
      `
    default:
      break;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Janken</title>
    </head>
    <body>
      <header>
        <h1>Janken</h1>
        <hr>
      </header>
      <nav>
        <div>
          <a href="/">HOME</a>
          <a href="/aboutus">ABOUTUS</a>
          <a href="/contact">CONTACT</a>
        </div>
        <hr>
      </nav>
      ${content && content}
    </body>
    </html>
  `)
})

server.listen(port, () => {
  console.log(`Built server on port ${port}`);
});