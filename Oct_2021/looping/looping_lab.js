// What are the 3 types of for loop 
// for, for-in, for-of

// Convert a standard javascript function to an arrow function
function add (x, y) {
  return x + y;
};

//↓

const add = (x, y) => {
  return x + y;
}

//  Use a switch statement to answer this
// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

function basicOp(operation, value1, value2)
{
  // Code
  switch(operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      break;
  }
}

// Use any looping to answer this
// https://www.codewars.com/kata/reversed-sequence/train/javascript

const reverseSeq = n => {
  const intArr = [];
  for (let i = n; i > 0; i--) {
    intArr.push(i);
  }
  return intArr;
};

// Just a comparison but good for understanding English
// https://www.codewars.com/kata/transportation-on-vacation/train/javascript

function rentalCarCost(d) {
  // Your solution here
  const RENTPERADAY = 40;
  let cost = d * RENTPERADAY;
  if (d >= 7) {
    cost -= 50;
  } else if (d >= 3 && d < 7) {
    cost -= 20;
  }
  return cost;
}

// Use conditions to answer this (a little harder?)
// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

const isLowerCase = c => c.toLowerCase() === c;

const hyphensAndSpaces = c => {
  const firstLetter = c.slice(0, 1);
  const lastLetter = c.slice(-1);
  return firstLetter !== '-' && firstLetter !== ' ' && lastLetter !== '-' && lastLetter !== ' ';
}

const feast = (beast, dish) => {
//your function here
  if (!isLowerCase(beast) || !isLowerCase(dish)) return "Every characters should be lower case.";
  if (beast.length < 2 || dish.length < 2) return "Strings should be more than 2.";
  if (!hyphensAndSpaces(beast) || !hyphensAndSpaces(dish)) return "You cannot input hyphens or spaces at the beginning or end of the string.";
  return beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1);
}
