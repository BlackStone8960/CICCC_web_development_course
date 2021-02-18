'use strict';

// 1. What is ES6?
// A. It is a new version of Javascript applied in 2015. It is also called as ECMAScript 2015.

// 2. Name 3 examples of ES6 feature.
// A. const and let, Destructuring, Template Literals

// 3. What is the difference between let and const?
// A. It's mutable or not. We can set a new value to valuables declared with let, but we can't with const.

// 4. Name at least 5 data types of javascript
// A. Numbers, Strings, Boolean, Object, Null

// 5. How do you destructure arrays and objects?
// A.
const city = ["Vancouver", "Montreal"];
const [west, east] = city;

// console.log(west, east);

// 6. Name 3 ways to access an object value in ES6
// A. dot notation, square brackets notation, destructuring with curly braces

// 7. Convert if else statement to conditional operator. (if () {} else {})
// A.
let night = true;

if(night) {
  console.log('Good Night');
} else {
  console.log('Hello');
}

// It is the same as...

night ? console.log('Good Night') : console.log('Hello');

/* =================== Code Wars =================== */
// 1. https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd. Note: only positive integers will be tested. https://en.wikipedia.org/wiki/Triangle

// A. 
function otherAngle(a, b) {
  return 180 - (a + b);
}

// console.log(otherAngle(30, 60));

// 2. https://www.codewars.com/kata/basic-mathematical-operations/train/javascript
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

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

console.log(resultAll);

// 3.
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
// It is your job to fix the code and get the program working again! Example output: Hello, Mr. Spock

// A. 
function sayHello(name) {
  return `Hello, ${name}`;
}

// console.log(sayHello('Mr. Spock'));

// 4. Your task is to sum the differences between consecutive pairs in the array in descending order.
// For example: sumOfDifferences([2, 1, 10]) Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// A.

function compare(a, b) {
  return b - a;
}

function sumOfDifferences(arr) {
  if(arr.length < 2) {
    return 0;
  } else {
    let diff = 0;
    let sumDiff = 0;
    arr.sort(compare);
    for(let i = 0; i < arr.length - 1; i++) {
      diff = arr[i] - arr[i + 1];
      sumDiff += diff;
    } 
    return sumDiff;
  }
}

// console.log(sumOfDifferences([1, 2, -10]));