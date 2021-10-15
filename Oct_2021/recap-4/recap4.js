// Write a function that takes an array as a parameter and returns true if a value is repeated twice or more, else returns false
// // Does the following array contains a duplicate
// /* let array = [1,4,2,11,1,4,5]; */  Expected Output -  true
const checkDuplicate = (arr) => {
  let isDuplicated = false;
  arr.forEach((element, index, self) => {
    if (self.indexOf(element) !== index) isDuplicated = true;
  })
  return isDuplicated;
};

// Write a function that takes in an array, and returns an object having keys as the  array items with their counts
// // For given array, return an object with numbers and their counts
// /* let array = [1,4,22,1,0,22,4,1];  Expected Output : { 1: 3, 4: 2, 22: 2, 0: 1} */  
const countItems = (arr) => {
  const count = {};
  arr.forEach(e => {
    count[e] = (count[e] || 0) + 1;
  })
  return count;
};

// // Write a function that returns a new array/same array after removing Duplicates from an array
// /* let array = [1,4,22,1,0,22,4,1]; // Expected Output: [1,4,22,0]; // order can change

const set = arr => [...new Set(arr)];

// // Write a function that returns a  the missing integer, provided a given array
// /* let array = [1,2,3,4,6,7,8,9,10]; */  Expected Output: 5

const missingInteger = arr => {
  const output = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      for (k = arr[i - 1] + 1; k < arr[i]; k++ ) {
        output.push(k);
      }
    } 
  }
  return output;
}

// // Write a function that returns smallest and largest in an array
//  /* let array = [1,11,-20,5,25,0, 3];  Expected output [-20, 25] */

const smallAndLarge = arr => {
  const max = arr.reduce((a, b) => Math.max(a, b));
  const min = arr.reduce((a, b) => Math.min(a, b));
  return [min, max];
}
 
// // Write a function that Reverses an array without using Es6 Reverse Method
// // let array = [1,2,3,4] -->Expected Output [4,3,2,1]

const reverseArr = arr => {
  const output = [];
  arr.forEach((element) => {
    output.unshift(element)
  })
  return output;
}