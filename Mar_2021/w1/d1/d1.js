'use strict';

// 1. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a
// string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890";
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468";
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527";

// Notes
// Don't forget the space after the closing parenthesis.

const isPhoneNumbers = (phoneArr) => {
  let isPhoneNumbers = true;
  for(let i = 0; i < phoneArr.length; i++) {
    if(phoneArr[i] < 0 || phoneArr[i] >= 10 || !Number.isInteger(phoneArr[i])) {
      isPhoneNumbers = false;
      break;
    }  
  }
  return isPhoneNumbers;
};

const formatPhoneNumber = (phoneArr) => {
  if (phoneArr.length === 10 && isPhoneNumbers(phoneArr)) {
    const firstNums = [...phoneArr].splice(0, 3).join('');
    const secondNums = [...phoneArr].splice(3, 3).join('');
    const thirdNums = [...phoneArr].splice(6, 4).join('');
    return `(${firstNums}) ${secondNums}-${thirdNums}`;  
  } else if (phoneArr.length !== 10) {
    return "Input 10 positie integers to an array.";
  } else {
    return "Input positive integers from 0 to 9 into an array."
  }
};

const phoneArr = [1, 2, 3, 3, 5, 6, 7, 8, 9, 3];

// console.log(formatPhoneNumber(phoneArr));

// 2. Create a function that takes two arrays and insert the second array in the middle
// of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// Notes
// ● The first array always has two elements.
// ● Use the spread syntax to solve this challenge.

const tuckIn = (arr1, arr2) => {
  // const startIndex = Math.floor(arr1.length / 2); // If first array has more than two elements
  arr1.splice(1, 0, ...arr2);
  return arr1;
};

const arr1 = [[1, 2], [5, 6]];
const arr2 = [[3, 4]];

console.log(tuckIn(arr1, arr2));

// 3. Given an array of numbers, return an array which contains all the even numbers
// in the orginal array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

const getOnlyEvens = (array) => (
  array.filter((value, index) => value % 2 === 0 && index % 2 === 0)
);

const array3 = [0, 1, 2, 3, 4, 6, 8, 10, 12];
// console.log(getOnlyEvens(array3));