// Convert this async function to async/await
// getQuote().then((quote) => {
//   console.log(quote)
// }).catch(function(error){
//   console.log(error);
// });

// A.

const asyncGetQuote = async () => {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch(err) {
    console.log(err);
  }
}

asyncGetQuote();

// Convert this if-else statement to the conditional operator
// const age = 30;
// let order;

// if(age < 20) {
//   older = false;
// } else {
//   older = true;
// }

const age = 30;
let older;

older = age < 20 ? false : true;

// Convert this code to arrow function 
// function greeting(firstName, lastName) {
//   return `Hi, ${firstName} ${lastName}`;
// }

const greeting = (firstName, lastName) => `Hi, ${firstName} ${lastName}`