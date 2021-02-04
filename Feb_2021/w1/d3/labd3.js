// (1) Create a function that takes two numbers as arguments and return their sum.

function sum(num1, num2) {
  return num1 + num2;
}

// console.log(sum(1,4));

// (2) Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function increment(number) {
  return ++number;
}

// console.log(increment(5));

// (3) Write a function that takes an integer minutes and converts it to seconds.

function secondConverter(minutes) {
  return minutes * 60;
}

// console.log(secondConverter(3));

// (4) Create a function that takes two numbers as arguments (num, length) 
//     and returns an array of multiples of num up to length.

function arrayOfMultiples (num, length) {
  var array = [];

  for (i = 0; i < length; i++) {
    array[i] = num * (i + 1);
  }
  return array;
}

// console.log(arrayOfMultiples(7, 5));

// (5) Write a function that converts an object into an array, where each element represents a key-value pair.

function objectToArray(obj) {
  var array = [];
  for(key in obj) {
    if(obj.hasOwnProperty(key)) {
      array.push([key, obj[key]]);
    }
  }
  return array;
}

var object = {
  name: 'Mike',
  age: 20,
  hobby: 'guitar',
  homeTown: 'New York'
}
console.log(objectToArray(object));