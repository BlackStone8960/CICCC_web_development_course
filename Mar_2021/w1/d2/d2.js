'use strict';

// 1. What are promises?
// A. It is a way to handle asynchronous process. 
// And also it can resolve calling callback function multipletime inside the same function (callback hell).

// 2. What are the 2 parameters inside the callback functions that the promise returns?
// A. resolve, reject

// 3. How do you use promises?
// Following process is an example to use them.
const returnInput = (value) => {
  return new Promise((resolve) => { // You can pass callback function which has two arguments(resolve, reject) to Promise constructor.
    setTimeout(() => { // You can set async process inside callback function.
      resolve(`Resolved! You input ${value}.`); // This function will be executed when process done successfully.
    }, 2000);
  });
}

returnInput(0) // You can chain then() and catch() to the function which returns Promise instance.
.then((res) => { // then() will be executed when the process inside promise constructor succeed. It receives the argument of resolve(). 
  // console.log(res);
})

// 4. What is the difference between asynchronous and synchronous?
// It is whether processes run at the same time or not.
// When the processes are all synchronous, they will run line by line.
// If processes have some asynchronous operations, they run as well, but they also let other processes run at the same time.

// 5. How do we catch errors for promises?
// Following process is an example to catch error.
const isLargerThanThree = (value) => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      if(value > 3) {
        resolve(`Resolved! You input ${value}.`); // resolve() will be executed when process done successfully.
      } else {
        reject(`Rejected! Input the number which is larger than three.`); // reject() will be executed when process failed. It passes a reason of error
      }
    }, 2000);
  });
}

isLargerThanThree(2) // You can chain then() and catch() to the function which returns Promise instance.
.then((res) => { // then() will be executed when the process inside promise constructor succeed. It receives the argument of resolve(). 
  // console.log(res);
})
.catch((err) => { // catch() will be executed when the process inside promise constructor failed. It receives the argument of reject(). 
  // console.log(err);
})

// 6. How do you write a try-catch block?
// Following process is an example to use try-catch block with async/await syntax. 
// (I used function defined at question 5)

const question6 = async () => {
  try {
    const res = await isLargerThanThree(2);
    // console.log(res);
  } catch(err) { // If process failed, the process inside catch will be executed
    // console.log(err);
  }
};

question6();

// 7. Try to convert from .then() => async await
// I will try to convert .then() in following program.
const confirmInput = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved! You input ${value}, right?`);
    }, 2000);
  });
};

confirmInput(3)
.then((ans) => {
  // console.log(`1. ${ans}`);
  return confirmInput(0);
})
.then((ans) => {
  // console.log(`2. ${ans}`);
  return confirmInput(10);
})
.then((ans) => {
  // console.log(`3. ${ans}`);
})

// It will be converted as follows.
const question7 = async () => {
  const res = await confirmInput(3);
  // console.log(`1. ${res}`);
  const res2 = await confirmInput(0);
  // console.log(`2. ${res2}`);
  const res3 = await confirmInput(10);
  // console.log(`3. ${res3}`);
};

question7();

// 8. Give me 2 examples in a project when you want to use promises

// ex1. If you want to calculate the width and height of loaded image files, to use promises is a good way to realize it.
// The process of loading images will be asynchronous, so you can write it inside Promise constructor.
// And also you can write the process of calculating image sizes in then().

// ex2. If you want to load some API first and execute multiple processes asynchronously after that, you can use promise as well.
// If you use only callaback functions, codes will be nested a lot and difficult to manage project.

// Class assignment 1
// Catch this promise in both .then() way and async await way.
function scaryCrown(isScary) {
  return new Promise((resolve, reject) => {
    isScary ? resolve(' 🤡 ') : reject('Not scary');
  });
}

// Console.log() the result or error of this promise. Either the result should give me console 

// A. Using then(), it will be follows.

scaryCrown(true)
.then((ans) => {
  console.log(ans);
})
.catch((err) => {
  console.log(err);
});

// Using async/await, I can write as follows.

// const consoleAns = async () => {
//   try{
//     const ans = await scaryCrown(false);
//     console.log(ans);
//   } catch(err) {
//     console.log(err);
//   }
// };

// consoleAns();