'use strict';

// 1. What are the 3 types of for loop 
// for, for-in, for-of

// 2. Convert a standard javascript function to an arrow function
function add(value1, value2) {
  return value1 + value2;
}

// is the same as

// const add = (value1, value2) => value1 + value2;

// console.log(add(3,2));

// 3.  Use a switch statement to answer this
// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

// A.
function basicOp(operation, value1, value2) {
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
      return 'Input +, -, *, / as a first argument'
  }
};

const resultPlus = basicOp('+', 1, 3);
const resultMinus = basicOp('-', 10, 4);
const resultMultiply = basicOp('*', 2, 5);
const resultDevide = basicOp('/', 4, 2);
const resultAll = [resultPlus, resultMinus, resultMultiply, resultDevide];

// console.log(resultAll);

// 4. Use any looping to answer this
// https://www.codewars.com/kata/reversed-sequence/train/javascript

// A.
const reverseSeq = n => {
  if(n > 0) {
    let ans = [];
    while(n > 0) {
      ans.push(n);
      n--;
    }  
    return ans;
  } else {
    return 'Input an integer which is larger than 0.';
  }  
};

// console.log(reverseSeq(15));

// 5. Just a comparison but good for understanding English 
// https://www.codewars.com/kata/transportation-on-vacation/train/javascript

// A. 
const rentalCarCost = (days) => {
  if (!isNaN(days)) {
    let cost;
    if (days >= 7) {
      cost = days * 40 - 50;
    } else if (days >= 3 && days < 7) {
      cost = days * 40 - 20;
    } else if (days < 3 && days > 0) {
      cost = days * 40;
    } else {
      return 'Input a positive value.'
    }
    return cost;
  } else {
    return 'Input a positive integer.';
  }
}

// console.log(rentalCarCost(7));

// 6. Use conditions to answer this (a little harder?) 
// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

// A.

const judgeString = (obj) => {
  if (typeof(obj) == 'string' || obj instanceof String) {
    const isLowerCase = obj === obj.toLowerCase();
    const isMoreThanTwo = obj.length >= 2;
    
    const firstLetter = obj.slice(0, 1);
    const lastLetter = obj.slice(-1);
    const judgeSymbol = firstLetter !== '-' && firstLetter !== ' ' && lastLetter !== '-' && lastLetter !== ' ';
    
    return isLowerCase && isMoreThanTwo && judgeSymbol;
  } else {
    return false;
  }
};

const feast = (beast, dish) => {
  if(judgeString(beast) && judgeString(dish)) {
    const firstLetter = beast.slice(0, 1) === dish.slice(0, 1);
    const lastLetter = beast.slice(-1) === dish.slice(-1);
    return firstLetter && lastLetter;
  } else {
    return 'Input format is incorrect';
  }
};

// console.log(feast("chickadee", "chocolate cake"));