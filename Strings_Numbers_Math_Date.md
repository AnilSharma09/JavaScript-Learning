# 🔤 Phase 3: Strings, Numbers, Math, Date

> Rozmarra ke kaam (naam format karna, price dikhana, date dikhana) isi phase ke tools se hote hain.

## 📑 Table of Contents
1. [String Methods](#1-string-methods)
2. [Template Literals aur Tagged Templates](#2-template-literals-aur-tagged-templates)
3. [Number Methods](#3-number-methods)
4. [Math Object](#4-math-object)
5. [Date Object](#5-date-object)
6. [Intl API](#6-intl-api)
7. [Practice Questions](#7-practice-questions)
8. [Interview Q&A](#8-interview-qa)

---

## 1. String Methods

Strings **immutable** hain: koi method original string nahi badalta, nayi string deta hai.

```js
const s = "  JavaScript Seekho  ";

s.trim();                 // "JavaScript Seekho"
s.trim().length;          // 17
"JavaScript".slice(0, 4); // "Java"   (start, end-exclusive)
"JavaScript".slice(-6);   // "Script" (negative = peeche se)
"JavaScript".substring(4, 10); // "Script"
"a,b,c".split(",");       // ["a", "b", "c"]
"hello world".replace("world", "JS");   // "hello JS"
"a-b-c".replaceAll("-", "+");           // "a+b+c"
"JavaScript".includes("Script");        // true
"JavaScript".startsWith("Java");        // true
"JavaScript".endsWith("pt");            // true
"5".padStart(3, "0");     // "005"
"ab".padEnd(5, "*");      // "ab***"
"JavaScript".at(-1);      // "t"  (aakhri character)
"abc".toUpperCase();      // "ABC"
"ABC".toLowerCase();      // "abc"
"ha".repeat(3);           // "hahaha"
"abc".indexOf("c");       // 2
"abc".charAt(0);          // "a"
```

`slice` aur `substring` ka main farak: `slice` negative index samajhta hai, `substring` nahi.

---

## 2. Template Literals aur Tagged Templates

```js
const name = "Anil";
const age = 25;

// Backticks ` ` use karo
console.log(`Naam: ${name}, Age: ${age}`);
console.log(`2 + 3 = ${2 + 3}`);

// Multi-line
const msg = `Line 1
Line 2`;
```

### Tagged templates
Function jo template ko process karta hai.
```js
function highlight(strings, ...values) {
  return strings.reduce(
    (out, str, i) => out + str + (values[i] !== undefined ? `<b>${values[i]}</b>` : ""),
    ""
  );
}
const city = "Jaipur";
highlight`Main ${city} mein rehta hoon`;
// "Main <b>Jaipur</b> mein rehta hoon"
```

---

## 3. Number Methods

```js
(3.14159).toFixed(2);        // "3.14" (string return karta hai!)
parseInt("42px");            // 42
parseInt("101", 2);          // 5 (binary)
parseFloat("3.14abc");       // 3.14
Number.isInteger(5.0);       // true
Number.isInteger(5.5);       // false
Number.isNaN(NaN);           // true
Number.isFinite(10);         // true
Number.MAX_SAFE_INTEGER;     // 9007199254740991
```

### NaN aur Infinity
```js
0 / 0          // NaN
1 / 0          // Infinity
NaN === NaN    // false ⚠️ (NaN apne aap se bhi equal nahi)
Number.isNaN("abc")   // false (sirf asli NaN par true)
isNaN("abc")          // true (purana, pehle convert karta hai, avoid karo)
```

### Float ka mashhoor bug
```js
0.1 + 0.2 === 0.3              // false
0.1 + 0.2                      // 0.30000000000000004
(0.1 + 0.2).toFixed(2) === "0.30"   // paise ke liye toFixed ya integers (paise mein) use karo
```

---

## 4. Math Object

```js
Math.floor(4.9);   // 4  (neeche)
Math.ceil(4.1);    // 5  (upar)
Math.round(4.5);   // 5
Math.trunc(-4.9);  // -4 (decimal hata do)
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
Math.abs(-7);      // 7
Math.pow(2, 3);    // 8
Math.sqrt(16);     // 4
Math.random();     // 0 se 1 ke beech (1 nahi)

// 1 se 10 ke beech random integer
Math.floor(Math.random() * 10) + 1;

// min se max (inclusive) random
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Array ka max
Math.max(...[1, 9, 3]);   // 9
```

---

## 5. Date Object

```js
const now = new Date();
now.getFullYear();   // 2026
now.getMonth();      // 0-11 ⚠️ (January = 0)
now.getDate();       // 1-31 (din)
now.getDay();        // 0-6 (Sunday = 0)
now.getHours();
now.getTime();       // timestamp (ms, 1970 se)
Date.now();          // abhi ka timestamp

const d = new Date("2026-10-30");
const d2 = new Date(2026, 9, 30);   // month 9 = October

// Date badalna
d.setDate(d.getDate() + 7);   // 7 din aage

// Do dates ke beech din
const diff = (new Date("2026-12-25") - new Date("2026-10-30")) / (1000 * 60 * 60 * 24);

// Format
now.toISOString();        // "2026-10-30T07:00:00.000Z"
now.toLocaleDateString("en-IN");   // "30/10/2026"
now.toLocaleTimeString("en-IN");
```

**Yaad rakho:** month `0` se shuru hota hai, aur timezone ka dhyan rakho (`toISOString` UTC deta hai).

---

## 6. Intl API

Alag-alag locale ke hisaab se formatting.

```js
// Currency
new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(1234567.5);
// "₹12,34,567.50"

// Number grouping
new Intl.NumberFormat("en-IN").format(1234567);   // "12,34,567"

// Date
new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date());
// "30 October 2026"

// Relative time
new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(-1, "day");  // "yesterday"
```

---

## 7. Practice Questions

1. String reverse karo (`split`, `reverse`, `join`).
2. Check karo string palindrome hai ya nahi (`"madam"`).
3. Sentence ka har word capitalize karo ("hello world" → "Hello World").
4. String mein vowels count karo.
5. `0.1 + 0.2` ka result print karke explain karo, aur sahi tarah se `0.3` kaise dikhaoge.
6. 1 se 100 ke beech random number generate karo.
7. Aaj se 30 din baad ki date nikalo.
8. Apni birth date se aaj tak kitne din hue nikalo.
9. `1234567.891` ko ₹ format mein dikhao (`Intl`).
10. Email ka username part nikalo (`"anil@gmail.com"` → `"anil"`).

---

## 8. Interview Q&A

**Q1. Strings immutable kyun kehte hain?**
A. String ke methods original string ko nahi badalte, har baar nayi string return karte hain.

**Q2. `slice` aur `substring` mein farak?**
A. `slice` negative indexes support karta hai (peeche se count). `substring` negative ko 0 maan leta hai aur arguments swap bhi kar deta hai.

**Q3. `0.1 + 0.2 !== 0.3` kyun hai?**
A. Numbers binary floating-point mein store hote hain, aur 0.1 ko exactly represent nahi kar sakte. Paison ke liye integers (paise) ya `toFixed` use karo.

**Q4. `NaN === NaN` false kyun hai? Check kaise karein?**
A. Spec ke hisaab se NaN kisi se bhi equal nahi. `Number.isNaN(value)` use karo.

**Q5. `Date` mein month 0 se kyun shuru hota hai?**
A. Purane design ki wajah se (Java ke Date se aaya). January = 0, December = 11. Isliye `new Date(2026, 9, 30)` October hai.

**Q6. Template literal ke fayde?**
A. `${}` se variables/expressions seedhe string mein, multi-line strings, aur tagged templates ki suvidha.

---

*Pichla: [Phase 2](./02_Functions.md) | Agla: [Phase 4: Arrays aur Objects](./04_Arrays_Objects.md)*
