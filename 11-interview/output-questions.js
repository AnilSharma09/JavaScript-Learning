// 11 - Output-based interview questions
// Har question ka output PEHLE khud predict karo, phir file chalao.
// Answers har question ke neeche comment mein hain.

// Q1: Hoisting
console.log(a1); // ?
var a1 = 1;
// Answer: undefined

// Q2: Event loop
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// Answer: A, D, C, B

// Q3: var in loop
for (var i = 0; i < 3; i++) setTimeout(() => console.log("Q3:", i), 0);
// Answer: 3, 3, 3 (let se 0, 1, 2 aata)

// Q4: Type coercion
console.log([] + [], [] + {}, 1 + "2", "3" - 1, true + 1, null + 1, undefined + 1);
// Answer: "" , "[object Object]", "12", 2, 2, 1, NaN

// Q5: Equality
console.log(null == undefined, null === undefined, NaN == NaN, [1] == 1, "0" == false);
// Answer: true, false, false, true, true

// Q6: this
const obj = { name: "Anil", regular() { return this?.name; }, arrow: () => typeof this };
const { regular } = obj;
console.log(obj.regular(), regular());
// Answer: "Anil", undefined (strict/module mein)

// Q7: Closure
function outer() {
  let x = 10;
  return function inner() { return ++x; };
}
const f = outer();
console.log(f(), f(), outer()());
// Answer: 11, 12, 11

// Q8: async/await order
async function foo() {
  console.log("foo start");
  await null;
  console.log("foo end");
}
foo();
console.log("after foo");
// Answer: foo start, after foo, foo end

// Q9: Reference
const x = { v: 1 };
const y = x;
y.v = 2;
const z = { ...x };
z.v = 3;
console.log(x.v, y.v, z.v);
// Answer: 2, 2, 3

// Q10: typeof
console.log(typeof null, typeof undefined, typeof [], typeof function () {}, typeof NaN);
// Answer: "object", "undefined", "object", "function", "number"

// Q11: Array methods
console.log([1, 2, 3].map(parseInt), ["1", "2", "3"].map(Number));
// Answer: [1, NaN, NaN] (map index bhi deta hai, parseInt radix samajhta hai), [1, 2, 3]

// Q12: Sort
console.log([10, 9, 1, 2].sort(), [10, 9, 1, 2].sort((a, b) => a - b));
// Answer: [1, 10, 2, 9] (string sort), [1, 2, 9, 10]

// Q13: Promise chain
Promise.resolve(1)
  .then((v) => { console.log("Q13a", v); return v + 1; })
  .then((v) => { console.log("Q13b", v); throw new Error("x"); })
  .catch(() => 10)
  .then((v) => console.log("Q13c", v));
// Answer: Q13a 1, Q13b 2, Q13c 10

// Q14: setTimeout vs nextTick vs promise (Node)
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));
// Answer: nextTick, promise, timeout, immediate (timeout/immediate ka order main module mein fix nahi hota)
