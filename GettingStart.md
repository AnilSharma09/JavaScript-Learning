# 🚀 Phase 0: Shuruaat Se Pehle

> JavaScript seekhne se pehle ye samajhna zaroori hai ki ye kya hai, kahan chalti hai, aur code kahan likhte hain. Ye phase 1-2 din ka hai.

## 📑 Table of Contents
1. [JavaScript Kya Hai](#1-javascript-kya-hai)
2. [Kahan Chalti Hai: Browser aur Node.js](#2-kahan-chalti-hai-browser-aur-nodejs)
3. [JS, ECMAScript aur Versions](#3-js-ecmascript-aur-versions)
4. [Browser DevTools](#4-browser-devtools)
5. [Pehla Program](#5-pehla-program)
6. [Comments, Statements, Semicolons](#6-comments-statements-semicolons)
7. [Strict Mode](#7-strict-mode)
8. [Practice Questions](#8-practice-questions)
9. [Interview Q&A](#9-interview-qa)

---

## 1. JavaScript Kya Hai

JavaScript ek **programming language** hai jo web pages ko interactive banati hai.

| Technology | Kaam | Example |
|---|---|---|
| HTML | Structure | Heading, button, form |
| CSS | Styling | Color, layout |
| **JavaScript** | **Behaviour** | Button click pe kuch hona, data fetch karna |

Agar website ek ghar hai: HTML = deewarein, CSS = paint, JavaScript = bijli aur switches.

---

## 2. Kahan Chalti Hai: Browser aur Node.js

- **Browser:** Chrome, Edge, Firefox sab mein JS engine hota hai (Chrome mein **V8**). Yahan JS DOM aur browser APIs use kar sakti hai (`document`, `window`).
- **Node.js:** JS ko browser ke bahar server/laptop par chalane ka runtime. Yahan `document` nahi hota, lekin file system, server banana, database se baat karna sab hota hai.

```bash
# Node.js check karo
node -v
```

---

## 3. JS, ECMAScript aur Versions

- **ECMAScript (ES)** ek standard/specification hai. **JavaScript** uska implementation hai.
- **ES5 (2009):** purana style, `var` wala.
- **ES6 / ES2015:** bada update. `let`, `const`, arrow functions, classes, modules, promises.
- Uske baad har saal naye features aate hain (ES2016, ES2017 ... ). Inhe "ES6+" kehte hain.

Aaj jo bhi code likhoge wo modern JS (ES6+) hoga.

---

## 4. Browser DevTools

Chrome mein `F12` ya `Ctrl+Shift+I` dabao.

| Tab | Kaam |
|---|---|
| **Console** | JS code chalana, errors aur `console.log()` ka output dekhna |
| **Sources** | Apni JS files dekhna, breakpoints lagana, debug karna |
| **Network** | Browser ne kaun si requests bheji aur response kya aaya |
| Elements | HTML/CSS dekhna aur edit karna |

Console mein seedha likh ke try karo:

```js
2 + 2
"Anil".toUpperCase()
```

---

## 5. Pehla Program

### console.log()
```js
console.log("Hello, JavaScript!");
console.log(10 + 5);
```

### `<script>` tag (HTML ke andar)
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Mera Pehla JS</h1>
    <script>
      console.log("Page load ho gaya");
    </script>
  </body>
</html>
```

### External `.js` file (best practice)
```html
<!-- index.html -->
<script src="script.js"></script>
```
```js
// script.js
console.log("External file se hello");
```

Script tag `</body>` se pehle rakho, ya `defer` use karo:
```html
<script src="script.js" defer></script>
```

### Node.js mein chalao
```bash
node script.js
```

---

## 6. Comments, Statements, Semicolons

```js
// Ye single line comment hai

/* Ye
   multi-line
   comment hai */

let name = "Anil";   // ek statement
console.log(name);   // doosra statement
```

- **Statement:** ek instruction (`let x = 5;`).
- **Semicolon (`;`):** statement ka end. JS kai baar khud laga leti hai (ASI), lekin kuch cases mein galti ho sakti hai, isliye lagane ki aadat daalo.

```js
// Ye galat result de sakta hai (semicolon na ho to)
const a = 1
const b = 2
```

---

## 7. Strict Mode

File ke top par likho:
```js
"use strict";

x = 10; // ❌ ReferenceError: x is not defined (bina let/const ke variable nahi banta)
```

Strict mode silent galtiyon ko error bana deta hai. ES Modules aur classes mein ye by default on hota hai.

---

## 8. Practice Questions

1. Browser console mein apna naam `console.log` se print karo.
2. Ek `index.html` aur `script.js` banao, aur script se page load hone par console mein message dikhao.
3. Console mein `typeof 5` aur `typeof "5"` chalao.
4. `node -v` chalake Node ka version dekho aur ek `.js` file Node se chalao.
5. `"use strict"` lagake bina `let` ke variable banao aur error dekho.

---

## 9. Interview Q&A

**Q1. JavaScript aur Java mein kya farak hai?**
A. Dono bilkul alag languages hain. Java compiled aur class-based hai, JavaScript interpreted aur mainly web ke liye hai. Naam ka similarity sirf marketing ki wajah se hai.

**Q2. JavaScript aur ECMAScript mein kya difference hai?**
A. ECMAScript language ka standard (rulebook) hai, JavaScript uska sabse popular implementation hai.

**Q3. Node.js kya hai?**
A. Chrome ke V8 engine par bana runtime jo JS ko browser ke bahar chalata hai, mainly server-side kaam ke liye.

**Q4. `"use strict"` kyun use karte hain?**
A. Silent errors pakadne ke liye (jaise undeclared variable), aur code ko safer rakhne ke liye.

---

*[JavaScript Learning Roadmap](./README.md) ka hissa. Agla: [Phase 1: Core Basics](./01_Core_Basics.md)*
