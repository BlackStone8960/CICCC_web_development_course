// This is a fortune telling app.
// To run this program, type "work" or "love" or "money" as an argument.

const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, 'JSON', 'fortuneTellingResult.json');
const arg = process.argv[2];
const dataJSON = fs.readFileSync(resultPath).toString();
const data = JSON.parse(dataJSON);

if (arg === "work" || arg === "love" || arg === "money") {
  const resultsArr = data[arg];
  const randomNum = Math.floor(Math.random() * (resultsArr.length));
  console.log(resultsArr[randomNum]);
} else {
  console.log("To have fortune told, type love or work or money as an argument")
};