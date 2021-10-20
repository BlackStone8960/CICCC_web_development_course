// 1) Write a function to count odd and even numbers in an array
// let array = [1,4,11,20,55,0,4] // Expected Output = [3, 4]

const countOddEven = arr => {
  const output = [0, 0];
  arr.forEach(element => {
    element % 2 === 1 ? output[0]++ : output[1]++;
  })
  return output;
};

// 2) Write a function to Move all the 0's on left and 1's on right
// let array = [1,0,1,1,1,0,1,0,0] // Expected Output [0,0,0,0,1,1,1,1,1]

const arrangeZeroOne = arr => {
  const output = [];
  for (element of arr) {
    if (element === 0) {
      output.unshift(element);
    } else if (element === 1) {
      output.push(element);
    } else {
      return 'Input 0 or 1 into an array';
    }
  }
  return output;
}

// 3) Write a function to sort the array without using ES6 SORT function
// let array = [11,20,0,-20,4,22,1,0] --> // Expected Output [-20, 0, 0, 1, 4,11,20, 20]

const sort = arr => {
  let temp;
  for(let k = 0; k < arr.length; k++) {
    let sorted = true; // flag to check if sort is completed or not
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - arr[i + 1] > 0) {
        sorted = false;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (sorted) break; // finish sorting process if every elements are sorted
  }
  return arr;
};

// console.log(sort([11,20,0,-20,4,-22,1,0]));

// 3)  Write the polyfill of Foreach Function for Array

Array.prototype.forEachfy = function(fn) {
  for (const element of this) {
    fn(element)
  }
}

// const testArr = [1,2,3];
// const copiedArr = [];
// testArr.forEachfy(el => {
//   copiedArr.push(el * 2);
// });
// console.log(copiedArr);

// 4) Write the polyfill of Some Function for Array

Array.prototype.somy = function (fn) {
  let isPassed = false;
  for (const element of this) {
    if (fn(element)) isPassed = true;
  }
  return isPassed;
}
// const testArr2 = [1,3];
// console.log(testArr2.somy(element => element % 2 === 0));

// 5) Write the polyfill of Every Function for Array
Array.prototype.everify = function (fn) {
  let isPassed = 0;
  for (const element of this) {
     fn(element) && isPassed++;
  }
  return isPassed === this.length;
}

// const testArr3 = [2,4,6];
// console.log(testArr3.everify(element => element % 2 === 0));