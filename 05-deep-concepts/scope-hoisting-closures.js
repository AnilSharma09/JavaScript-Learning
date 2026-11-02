// 05 - Scope, Hoisting, TDZ, Closures

// Scope: let/const block scoped, var function scoped
if (true) {
  let a = 1;
  var b = 2;
}
console.log(typeof a, b); // "undefined" (a bahar nahi), 2

// Scope chain: inner function bahar ke variables dekh sakta hai
const outer = "outer";
function level1() {
  const l1 = "l1";
  function level2() {
    return `${outer} > ${l1}`;
  }
  return level2();
}
console.log(level1());

// Hoisting
console.log(hoistedVar);       // undefined (declaration upar uthi, value nahi)
var hoistedVar = 5;
console.log(hoistedFn());      // function declaration poori hoist hoti hai
function hoistedFn() { return "hoisted fn"; }

// Temporal Dead Zone: let/const declaration se pehle access karo to error
try {
  console.log(tdz);
  let tdz = 1;
} catch (e) {
  console.log("TDZ error:", e.name);
}

// Closure: function apne bante waqt ke variables yaad rakhta hai
function counter() {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count,
  };
}
const c1 = counter();
c1.inc(); c1.inc();
console.log("c1:", c1.get(), "c2:", counter().get()); // alag-alag private state

// Classic var-in-loop problem
const withVar = [];
for (var i = 0; i < 3; i++) withVar.push(() => i);
console.log(withVar.map((f) => f())); // [3,3,3]
const withLet = [];
for (let j = 0; j < 3; j++) withLet.push(() => j);
console.log(withLet.map((f) => f())); // [0,1,2]

// Closure use cases: once, memoize, private data
function once(fn) {
  let called = false, result;
  return (...args) => {
    if (!called) { called = true; result = fn(...args); }
    return result;
  };
}
const init = once(() => { console.log("sirf ek baar"); return 42; });
init(); init();

function memoize(fn) {
  const cache = new Map();
  return (n) => {
    if (cache.has(n)) return cache.get(n);
    const val = fn(n);
    cache.set(n, val);
    return val;
  };
}
const slowSquare = (n) => { console.log("calculating", n); return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(4); fastSquare(4);

// Currying
const curry = (a) => (b) => (c) => a + b + c;
console.log(curry(1)(2)(3));

// Compose / pipe
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
console.log(pipe((x) => x + 1, (x) => x * 2)(5)); // 12

// EXERCISE:
// 1. Bank account banao closure se: deposit, withdraw, balance (balance bahar se access na ho)
// 2. Generic curry(fn) likho jo kisi bhi arity ke liye chale
// 3. Output predict karo: for (var i=0;i<3;i++) setTimeout(()=>console.log(i),0)
