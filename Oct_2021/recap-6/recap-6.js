// 1) Given an array of integers nums and an integer target, return array with their indices
// nums = [2,7,11,15], target = 9 // Expected Output : [0,1]

const sumIndices = (nums, target) => {
  const filteredArr = [...nums].filter(num => num <= target); // remove numbers that are larger than target from given array
  for (let i = 0; i < filteredArr.length; i++) {
    for (let j = i + 1; j < filteredArr.length; j++) {
      if (filteredArr[i] + filteredArr[j] === target) return [i, j];
    }
  }
}

// console.log(sumIndices([2,7,11,15], 18));

// 2) Given a square matrix, return the sum of the matrix diagonals. Write a function that returns the sum
// let matrix = [[1, 2, 3],
//               [4, 5, 6],
//               [7, 8, 9] ] 
// Expected Output : 25

const matrixDiagonals = arr => {
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    sum += arr[i][i] + arr[i][length - 1 - i]
  }
  if (length % 2 === 1) {
    const centerIndex = Math.floor(length / 2);
    sum -= arr[centerIndex][centerIndex];
  }
  return sum;
}

// console.log(matrixDiagonals(matrix));

// 3) Given a string. Count the number of lower and upper characters in it.S = "ckjkUUYII" Expected Output:  [4, 5]

const countLowerAndApper = str => {
  let lowerCount = 0;
  let upperCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    char === char.toUpperCase() ? upperCount++ : lowerCount++;
  }
  return [lowerCount, upperCount];
}

// const string = "ckjkkkUUYII";
// console.log(countLowerAndApper(string));

// 4) Given a string str containing alphanumeric characters. The task is to calculate the sum of all the numbers present in the string.
// str = "1abc23" // Expected Output : 6

const sumNum = str => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/[1-9]/.test(char)) sum += Number(char); // check if character is number
  }
  return sum;
}

// const str = "1a9c23";
// console.log(sumNum(str));

// 5) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"NOTE: The secret society's name should be entirely uppercased.

const societyName = arr => {
  let society = "";
  arr.sort();
  arr.forEach(name => {
    society += name.charAt(0)
  })
  return society.toUpperCase();
}

// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));

// 6) Write a function that converts an object into an array of keys and values.
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] 

// NOTE: You cannot use Prebuild Object functions

const objectToArray = obj => {
  const result = [];
  for (const prop in obj) {
    result.push([prop, obj[prop]])
  }
  return result;
}

// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }));
// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }));