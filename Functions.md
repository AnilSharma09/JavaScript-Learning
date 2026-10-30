# ⚙️ Phase 2: Functions

> Functions JavaScript mein sabse important cheez hain. Yahan "functions are first-class citizens" ka matlab samajh aayega: function ko variable mein rakh sakte hain, argument ki tarah pass kar sakte hain, aur return bhi kar sakte hain.

## 📑 Table of Contents
1. [Declaration vs Expression](#1-declaration-vs-expression)
2. [Arrow Functions](#2-arrow-functions)
3. [Parameters, Default, Rest](#3-parameters-default-rest)
4. [Return Values, Pure vs Impure](#4-return-values-pure-vs-impure)
5. [IIFE](#5-iife)
6. [Callback Functions](#6-callback-functions)
7. [Higher-Order Functions](#7-higher-order-functions)
8. [Recursion](#8-recursion)
9. [Practice Questions](#9-practice-questions)
10. [Interview Q&A](#10-interview-qa)

---

## 1. Declaration vs Expression

```js
// Declaration: hoist hota hai, declare karne se pehle bhi call kar sakte ho
sayHi();
function sayHi() { console.log("Hi"); }

// Expression: variable mein function, hoist nahi hota
// sayBye();  // ❌ error
const sayBye = function () { console.log("Bye"); };
sayBye();
```

---

## 2. Arrow Functions

```js
const add = (a, b) => a + b;          // implicit return
const square = n => n * n;            // ek param ho to () optional
const greet = () => console.log("Hi");
const full = (a, b) => {              // multiple lines ho to {} aur return likho
  const sum = a + b;
  return sum;
};

// Object return karna ho to () lagao
const makeUser = name => ({ name });
```

**Arrow functions ki khaas baatein:** unka apna `this` nahi hota (aage ke phase mein), aur `arguments` object nahi hota.

---

## 3. Parameters, Default, Rest

```js
// Default parameter
function greet(name = "Guest") { return `Hello ${name}`; }
greet();          // "Hello Guest"
greet("Anil");    // "Hello Anil"

// Rest parameter: baaki sab arguments array mein
function sum(...nums) {
  return nums.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3, 4);  // 10
```

Rest hamesha **aakhri** parameter hota hai.

---

## 4. Return Values, Pure vs Impure

```js
function noReturn() { 1 + 1; }
console.log(noReturn());  // undefined (return nahi kiya)
```

### Pure function
Same input par hamesha same output, aur bahar ki cheez nahi badalta.
```js
const add = (a, b) => a + b;   // pure
```

### Impure function
Bahar ka data badalta hai ya random/time use karta hai.
```js
let total = 0;
function addToTotal(n) { total += n; }   // impure (bahar ka total badla)
const now = () => Date.now();            // impure (har baar alag)
```
Pure functions test karna aur samajhna aasan hota hai.

---

## 5. IIFE

Immediately Invoked Function Expression: banate hi chal jaata hai. Variables ko private rakhne ke liye use hota tha.

```js
(function () {
  const secret = "hidden";
  console.log("Turant chala");
})();

(() => console.log("Arrow IIFE"))();
```

---

## 6. Callback Functions

Function jo doosre function ko argument ki tarah di jaati hai.

```js
function process(name, callback) {
  console.log("Processing", name);
  callback();
}
process("Order", () => console.log("Done"));

[1, 2, 3].forEach(n => console.log(n));   // forEach ko callback di
setTimeout(() => console.log("1 sec baad"), 1000);
```

---

## 7. Higher-Order Functions

Jo function **doosra function leta hai ya return karta hai**.

```js
// Function leta hai
const nums = [1, 2, 3, 4];
nums.map(n => n * 2);        // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0); // [2, 4]

// Function return karta hai
function multiplier(factor) {
  return n => n * factor;
}
const double = multiplier(2);
double(5);   // 10
```

---

## 8. Recursion

Function khud ko call kare. Hamesha **base case** (rukne ki condition) chahiye.

```js
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);   // recursive case
}
factorial(5);  // 120

function sumTo(n) {
  return n === 0 ? 0 : n + sumTo(n - 1);
}
```
Base case bhoologe to "Maximum call stack size exceeded" error aayega.

---

## 9. Practice Questions

1. Teen tareeke se `add(a, b)` likho: declaration, expression, arrow.
2. Ek function jo kitne bhi numbers ka average de (rest parameter).
3. Default parameter wala `greet(name, greeting = "Hello")`.
4. Ek IIFE likho jo ek private counter banaye.
5. `multiplyBy(n)` jo ek function return kare (higher-order).
6. Recursion se Fibonacci ka nth number nikalo.
7. Recursion se string ko reverse karo.
8. Ek pure aur ek impure function ka example likho aur farak explain karo.
9. Apna `myForEach(arr, callback)` likho.

---

## 10. Interview Q&A

**Q1. Function declaration aur expression mein farak?**
A. Declaration hoist hoti hai (pehle bhi call kar sakte ho), expression nahi hoti. Expression variable mein store hoti hai.

**Q2. Arrow function aur normal function mein kya farak hai?**
A. Arrow function ka apna `this` aur `arguments` nahi hota, aur wo constructor (`new`) ki tarah use nahi ho sakta. Syntax chhota hota hai.

**Q3. Pure function kya hoti hai?**
A. Jo same input par same output deti hai aur koi side effect (bahar ka data change) nahi karti.

**Q4. Higher-order function kya hota hai?**
A. Jo function doosre function ko argument leta hai ya return karta hai. Jaise `map`, `filter`, `reduce`.

**Q5. Callback hell se pehle callback kya hota hai?**
A. Function jo kisi aur function ko pass ki jaati hai taaki wo baad mein (ya kisi event par) chalaye.

**Q6. Recursion mein base case kyun zaroori hai?**
A. Bina base case ke function khud ko hamesha call karta rahega aur call stack overflow ho jayega.

---

*Pichla: [Phase 1](./01_Core_Basics.md) | Agla: [Phase 3: Strings, Numbers, Math, Date](./03_Strings_Numbers_Math_Date.md)*
