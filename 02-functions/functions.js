// 02 - Functions

// Declaration (hoist hoti hai)
function add(a, b) {
  return a + b;
}

// Expression
const sub = function (a, b) {
  return a - b;
};

// Arrow
const mul = (a, b) => a * b;
const square = (n) => n * n;
const makeUser = (name) => ({ name }); // object return karne ke liye ()

console.log(add(2, 3), sub(5, 2), mul(3, 4), square(5), makeUser("Anil"));

// Default + rest parameters
const greet = (name = "Guest", greeting = "Hi") => `${greeting} ${name}`;
const sum = (...nums) => nums.reduce((t, n) => t + n, 0);
console.log(greet(), greet("Anil", "Hello"), sum(1, 2, 3, 4));

// Callback: function ko argument ki tarah dena
function repeat(times, fn) {
  for (let i = 0; i < times; i++) fn(i);
}
repeat(3, (i) => console.log("callback", i));

// Higher-order function: function return karna ya function lena
const multiplier = (factor) => (n) => n * factor;
const double = multiplier(2);
console.log(double(5));

// IIFE
(function () {
  console.log("IIFE turant chalta hai");
})();

// Recursion
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
console.log(factorial(5), fib(10));

// Pure function: same input -> same output, koi side effect nahi
const pureAdd = (a, b) => a + b;
let total = 0;
const impureAdd = (n) => (total += n); // bahar ka variable badalta hai
console.log(pureAdd(1, 2), impureAdd(5));

// EXERCISE:
// 1. Palindrome checker likho
// 2. Array ka max nikalne wala function (Math.max use kiye bina)
// 3. Factorial ko loop se likho
