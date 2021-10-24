// 1. Write a function/polyfill for all objects to calculate their size.
// let object = { a : 1, b: 2, c: 3 }, object.getSize() // Expected output 3

Object.prototype.getSize = function() {
  let size = 0;
  for (const prop in this) {
    this.hasOwnProperty(prop) && size++;
  }
  return size;
}

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// console.log(obj.getSize());

// 2. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Note: Volume of a cylinder : V = πr2h

class Cylinder {
  constructor(radius, height) {
    this.volume = parseFloat((2 * Math.PI * radius * height).toFixed(4));
  }
};

// const cylinder = new Cylinder(2, 3);
// console.log(cylinder.volume);

// 3. Write a JavaScript program to create a Clock.
// Note: The output will come every second.

// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
const toDoubleDigit = num => {
  let numStr = num.toString();
  if (numStr.length === 1) numStr = '0' + numStr;
  return numStr;
}

// setInterval(() => {
//   const d = new Date();
//   const hours = toDoubleDigit(d.getHours());
//   const minutes = toDoubleDigit(d.getMinutes());
//   const seconds = toDoubleDigit(d.getSeconds());
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000)

// 4. Write a function that prints 1, 2,3...10 after every 1 second
const fromOneToTen = () => {
  let num = 0;
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(++num);
    }, 1000 * i)  
  }
};

// fromOneToTen();

// ************ OUTPUT BASED QUESTIONS *******************

// 5. 
// const func = (function(a){ delete a;
// return a;
// })(5);

// console.log(func);

// This answer is 5 because delete operator removes property from an object

// 6. 
// console.log({a:1} == {a:1});console.log({a:1} === {a:1});

// the reason why these answers are false is the object is reference type, 
// so memory address will be saved into each object.

// 7. 
// function getAge() { 'use strict';
// age = 21;
// console.log(age);
// }

// getAge();

// This process will occur error because you should define variable before using it if the program runs in the strict mode.

// 8. 
// console.log(!!null);console.log(!!'');
// console.log(!!1);

// Answer is false false true because null and empty string are falsy value while 1 is truthy value.

// 9. 
// console.log([...'Ayush']);

// This answer is [ 'A', 'y', 'u', 's', 'h' ] because destructuring will work to string as well.

// 10. 
// let lang = 'javascript';(function(){
// let lang = 'java';
// })();

// console.log(lang);
// (function(){
// var lang2 = 'java';
// })();

// console.log(lang2);

// This process will occur error because lang2 is defined inside function. 
// The valuable that is defined inside function can be used only inside function.

// 11. 
const obj = { a: 'one', b: 'two', a: 'three' };console.log(obj)
// This answer is { a: 'three', b: 'two' } because the key value will be overwritten 
// if the same key name is written more than once in the same object.