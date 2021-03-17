"use strict";

function primeNumber(n) {
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let primeArray = [];
for(let i = 2; i < 100; i++) {
  primeNumber(i) && primeArray.push(i);
}
console.log(primeArray);