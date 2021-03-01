'use strict';

let quoteAndAuthor = [{
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  author: "Eleanor Roosevelt"
}, {
  quote: "When you reach the end of your rope, tie a knot in it and hang on.",
  author: "Franklin D. Roosevelt"
}, {
  quote: "Life is what happens when you're busy making other plans.",
  author: "John Lennon"
}];

const quoteForm = document.getElementById('quote-form');
let index;

document.getElementById('generate-button').addEventListener('click', () => {
  let randomNum, quoteSet, quoteIndex;

  do {
    randomNum = Math.floor(Math.random() * quoteAndAuthor.length);
    quoteSet = quoteAndAuthor[randomNum];
    quoteIndex = quoteAndAuthor.indexOf(quoteSet);
  } while (index === quoteIndex);

  document.getElementById('quote-sentence').textContent = quoteSet.quote;
  document.getElementById('author').textContent = quoteSet.author;

  index = quoteAndAuthor.indexOf(quoteSet);
});

const findDuplicate = (newObj) => (
  quoteAndAuthor.filter((originObj) => {
    return newObj.quote === originObj.quote && newObj.author === originObj.author;
  })
);

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const quoteObject = { 
    quote: quoteForm.quote.value,
    author: quoteForm.author.value
  };

  if(findDuplicate(quoteObject).length) {
    alert('Duplicated quote exists. Input other quotes.');
  } else {
    quoteAndAuthor.push(quoteObject);
    quoteForm.reset();
    alert('Your quote submitted successfully!');
  }
});