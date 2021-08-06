const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, 'JSON', 'fortuneTellingResult.json');

switch (process.argv[2]) {
  case 'fortune':
    const dataJSON = fs.readFileSync(resultPath).toString();
    const data = JSON.parse(dataJSON);
    const dataLength = Object.keys(data).length;
    const randomNum = Math.floor(Math.random() * (dataLength));
    console.log(data[Object.keys(data)[randomNum]]);
    break;
  default:
    break;
};