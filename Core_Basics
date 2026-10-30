# 🧱 Phase 1: Core Basics

> Variables, data types, operators aur control flow. Ye poori JavaScript ki neev hai. Yahan ki har cheez interview mein poochi jaati hai.

## 📑 Table of Contents
1. [var, let, const](#1-var-let-const)
2. [Primitive Types](#2-primitive-types)
3. [Reference Types](#3-reference-types)
4. [typeof, Coercion, Conversion](#4-typeof-coercion-conversion)
5. [Primitive vs Reference](#5-primitive-vs-reference)
6. [Operators](#6-operators)
7. [Truthy aur Falsy](#7-truthy-aur-falsy)
8. [Control Flow](#8-control-flow)
9. [Practice Questions](#9-practice-questions)
10. [Interview Q&A](#10-interview-qa)

---

## 1. var, let, const

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Re-declare | Ho sakta hai | Nahi | Nahi |
| Re-assign | Ho sakta hai | Ho sakta hai | Nahi |
| Hoisting | `undefined` ke saath | TDZ (error) | TDZ (error) |

```js
let age = 25;
age = 26;            // ✅

const PI = 3.14;
// PI = 3.15;        // ❌ TypeError

const user = { name: "Anil" };
user.name = "Rahul"; // ✅ object ke andar badal sakte hain, variable ko dobara assign nahi
```

**Rule:** Default `const` use karo. Jahan value badalni ho wahan `let`. `var` mat use karo.

---

## 2. Primitive Types

```js
let name = "Anil";          // string
let age = 25;               // number
let isQA = true;            // boolean
let nothing = null;         // null (jaan boojh ke khali)
let notSet;                 // undefined (value di hi nahi)
let id = Symbol("id");      // symbol (unique value)
let big = 12345678901234567890n; // bigint
```

- `null` aur `undefined` alag hain: `null` hum khud set karte hain, `undefined` JS deti hai jab value nahi hoti.
- Number mein integer aur decimal dono `number` hain.

---

## 3. Reference Types

```js
const obj = { name: "Anil", role: "QA" };   // object
const arr = [1, 2, 3];                       // array
function greet() { return "Hi"; }            // function
```

Ye sab **objects** hain. Inki value memory mein ek jagah rehti hai, variable usko **point** karta hai.

---

## 4. typeof, Coercion, Conversion

```js
typeof "hi"        // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ⚠️ purana bug hai JS ka
typeof [1, 2]      // "object"  (array check ke liye Array.isArray use karo)
typeof function(){} // "function"
```

### Type coercion (JS khud convert karti hai)
```js
"5" + 3      // "53"  (number string ban gaya)
"5" - 3      // 2     (string number ban gaya)
true + 1     // 2
"5" * "2"    // 10
```

### Type conversion (hum khud karte hain)
```js
Number("42")      // 42
Number("abc")     // NaN
String(100)       // "100"
Boolean(0)        // false
parseInt("42px")  // 42
```

---

## 5. Primitive vs Reference

```js
// Primitive: value copy hoti hai
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a nahi badla)

// Reference: address copy hota hai
const obj1 = { score: 10 };
const obj2 = obj1;
obj2.score = 99;
console.log(obj1.score); // 99 (dono same object ko point karte hain)
```

Isi wajah se `{} === {}` `false` hota hai: dono alag objects hain.

---

## 6. Operators

### Arithmetic aur assignment
```js
5 + 2; 5 - 2; 5 * 2; 5 / 2; 5 % 2; 5 ** 2;  // 7 3 10 2.5 1 25
let x = 5;
x += 3;   // 8
x++;      // 9
```

### Comparison: `==` vs `===`
```js
5 == "5"    // true  (type convert karke compare)
5 === "5"   // false (type bhi match hona chahiye)
null == undefined   // true
null === undefined  // false
```
**Hamesha `===` use karo.**

### Logical
```js
true && false   // false
true || false   // true
!true           // false

const name = userName || "Guest";   // userName falsy ho to "Guest"
```

### Ternary
```js
const status = age >= 18 ? "Adult" : "Minor";
```

### Nullish coalescing `??` aur Optional chaining `?.`
```js
const count = 0;
count || 10    // 10  (0 falsy hai, isliye galat)
count ?? 10    // 0   (sirf null/undefined par fallback)

const user = { profile: { city: "Jaipur" } };
user.profile?.city      // "Jaipur"
user.address?.city      // undefined (error nahi aata)
user.getName?.()        // method ho to chalao warna undefined
```

---

## 7. Truthy aur Falsy

**Falsy values (sirf ye 8):** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
Baaki sab truthy hain, jaise `"0"`, `"false"`, `[]`, `{}`.

```js
if ([]) console.log("Empty array bhi truthy hai");
if ("0") console.log("String '0' truthy hai");
```

---

## 8. Control Flow

### if / else if / else
```js
const marks = 72;
if (marks >= 90) console.log("A");
else if (marks >= 60) console.log("B");
else console.log("C");
```

### switch
```js
const day = 2;
switch (day) {
  case 1: console.log("Mon"); break;
  case 2: console.log("Tue"); break;
  default: console.log("Other");
}
```
`break` bhoologe to neeche ke cases bhi chal jaate hain (fall-through).

### Loops
```js
for (let i = 0; i < 3; i++) console.log(i);

let n = 0;
while (n < 3) { console.log(n); n++; }

do { console.log("ek baar to chalega"); } while (false);

for (const item of ["a", "b"]) console.log(item);      // values
for (const key in { x: 1, y: 2 }) console.log(key);    // keys
```
- `for...of` array/string ki values ke liye.
- `for...in` object ki keys ke liye (array par mat use karo).

### break, continue, labels
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;   // is iteration ko skip
  if (i === 4) break;      // loop band
  console.log(i);          // 0 1 3
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j);
  }
}
```

---

## 9. Practice Questions

1. Teen variables banao (`const` name, `let` age, `let` city) aur console mein print karo.
2. `typeof` se saare 7 primitives check karo.
3. `"10" + 5`, `"10" - 5`, `"10" * "2"` ka output predict karo, phir console mein check karo.
4. Number check: 1 se 20 tak ke even numbers `for` loop se print karo.
5. FizzBuzz: 1 se 30, 3 ke multiple par "Fizz", 5 par "Buzz", dono par "FizzBuzz".
6. `0 || 5` aur `0 ?? 5` ka farak samjhao.
7. Marks ke basis par grade (A/B/C/Fail) `if-else` aur phir `switch` dono se likho.
8. Ek array ke saare elements `for...of` se print karo.

---

## 10. Interview Q&A

**Q1. `var`, `let`, `const` mein difference?**
A. `var` function-scoped aur hoisted (`undefined` ke saath) hai. `let`/`const` block-scoped hain aur TDZ mein rehte hain. `const` ko re-assign nahi kar sakte.

**Q2. `==` aur `===` mein kya farak hai?**
A. `==` type coercion ke baad compare karta hai, `===` bina convert kiye value aur type dono compare karta hai.

**Q3. `typeof null` kya deta hai aur kyun?**
A. `"object"`. Ye JS ka shuruaati bug hai jo backward compatibility ke liye theek nahi kiya gaya.

**Q4. `null` aur `undefined` mein farak?**
A. `undefined` matlab value assign hi nahi hui. `null` matlab jaan boojh ke "khali" value di gayi.

**Q5. `||` aur `??` mein kab kaun use karein?**
A. `||` har falsy value par fallback deta hai (0, "" bhi). `??` sirf `null`/`undefined` par. Agar 0 ya empty string valid value hai to `??` use karo.

**Q6. Primitive aur reference types mein kya difference hai?**
A. Primitive copy karne par value copy hoti hai. Reference types mein address copy hota hai, isliye ek copy badalne par dusri bhi badal jaati hai.

---

*Pichla: [Phase 0](./00_Getting_Started.md) | Agla: [Phase 2: Functions](./02_Functions.md)*
