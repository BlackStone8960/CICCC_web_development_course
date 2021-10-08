// Question 1 : 
console.log(y); // y will be undefined
y = 1;
console.log(y); // 1
var y = 2;
y = 3;
console.log(y); // 3
var y;

// Question 2 : 
var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2

// Question 3: 
var z = 1;
let z; // Error that says 'z' has already been declared will be appeared 
console.log(z); // undefined
console.log(z); // undefined
let z = 1;

// Question 4:
function hoistExample() {
var a;
console.log("Before: ", a); 
a = 10;
console.log("After: ", a);
}
hoistExample();

// Before: undefined
// After: 10

// Question 5: 
function hoistingExample() {
console.log("Value of a in local scope: ", a); 
}
console.log("Value of a in global scope: ", a); // Value of a in global scope: undefined
var a = 1;
hoistingExample(); // Value of a in local scope: 1