// 01 - Variables aur Data Types
// Chalane ke liye: node 01-basics/variables-types.js

// let: badal sakta hai | const: nahi badalta (default yahi use karo) | var: purana, avoid karo
let age = 22;
age = 23;
const name = "Anil";

// Primitive types
const str = "text";
const num = 42;
const bool = true;
const nothing = null;      // jaan-boojh ke khali
let notAssigned;           // undefined
const big = 123n;          // bigint
const sym = Symbol("id");

console.log(typeof str, typeof num, typeof bool, typeof nothing, typeof notAssigned, typeof big, typeof sym);
// typeof null "object" dikhata hai: ye JS ka purana bug hai

// Reference types
const arr = [1, 2, 3];
const obj = { name: "Anil", age };
console.log(Array.isArray(arr), typeof obj);

// Primitive copy value se hoti hai, reference types reference se
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "b:", b); // a: 10 b: 20

const o1 = { x: 1 };
const o2 = o1;       // dono same object ko point karte hain
o2.x = 99;
console.log("o1.x:", o1.x); // 99

// Template literal
console.log(`Hello ${name}, tum ${age} saal ke ho`);

// Type conversion
console.log(Number("42"), Number("abc"), String(123), Boolean(""), parseInt("42px"), parseFloat("3.14abc"));
console.log("5" + 2, "5" - 2, "5" * "2"); // "52", 3, 10

// EXERCISE:
// 1. const variable ko reassign karke error dekho.
// 2. `[] + {}` aur `[] == false` ka output predict karo, phir chalake check karo.
