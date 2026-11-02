// 11 - Interview: Polyfills aur common patterns (khud likho, phir compare karo)

// --- Array polyfills ---
Array.prototype.myMap = function (cb) {
  const out = [];
  for (let i = 0; i < this.length; i++) out.push(cb(this[i], i, this));
  return out;
};
Array.prototype.myFilter = function (cb) {
  const out = [];
  for (let i = 0; i < this.length; i++) if (cb(this[i], i, this)) out.push(this[i]);
  return out;
};
Array.prototype.myReduce = function (cb, init) {
  let acc = init, start = 0;
  if (acc === undefined) { acc = this[0]; start = 1; }
  for (let i = start; i < this.length; i++) acc = cb(acc, this[i], i, this);
  return acc;
};
console.log([1, 2, 3].myMap((x) => x * 2), [1, 2, 3, 4].myFilter((x) => x % 2), [1, 2, 3].myReduce((a, b) => a + b, 0));

// --- flatten, deepClone, deepEqual ---
const flatten = (arr, depth = Infinity) =>
  arr.reduce((acc, v) => (Array.isArray(v) && depth > 0 ? acc.concat(flatten(v, depth - 1)) : acc.concat(v)), []);
console.log(flatten([1, [2, [3, [4]]]]), flatten([1, [2, [3]]], 1));

function deepClone(v, seen = new WeakMap()) {
  if (v === null || typeof v !== "object") return v;
  if (seen.has(v)) return seen.get(v);              // circular reference
  if (v instanceof Date) return new Date(v);
  const out = Array.isArray(v) ? [] : {};
  seen.set(v, out);
  for (const k of Object.keys(v)) out[k] = deepClone(v[k], seen);
  return out;
}
const orig = { a: 1, b: { c: [1, 2] } };
orig.self = orig;
const cl = deepClone(orig);
console.log(cl.b.c !== orig.b.c, cl.self === cl);

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || !a || !b) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  return ka.length === kb.length && ka.every((k) => deepEqual(a[k], b[k]));
}
console.log(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] }));

// --- debounce, throttle, once, memoize, curry ---
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const curry = (fn) => function c(...args) { return args.length >= fn.length ? fn(...args) : (...more) => c(...args, ...more); };
console.log(curry((a, b, c) => a + b + c)(1)(2)(3), curry((a, b, c) => a + b + c)(1, 2)(3));

// --- Event emitter ---
class Emitter {
  #h = new Map();
  on(e, fn) { (this.#h.get(e) ?? this.#h.set(e, []).get(e)).push(fn); return this; }
  off(e, fn) { this.#h.set(e, (this.#h.get(e) ?? []).filter((f) => f !== fn)); return this; }
  emit(e, ...a) { (this.#h.get(e) ?? []).forEach((f) => f(...a)); return this; }
}
new Emitter().on("hi", (n) => console.log("event:", n)).emit("hi", "Anil");

// --- Promise utilities ---
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function limit(tasks, n) {            // concurrency limit
  const results = [], running = new Set();
  for (const [i, task] of tasks.entries()) {
    const p = task().then((v) => (results[i] = v)).finally(() => running.delete(p));
    running.add(p);
    if (running.size >= n) await Promise.race(running);
  }
  await Promise.all(running);
  return results;
}
console.log(await limit([1, 2, 3, 4].map((x) => async () => { await sleep(10); return x * 10; }), 2));

// --- Common coding problems ---
const twoSum = (nums, target) => {
  const seen = new Map();
  for (const [i, n] of nums.entries()) {
    if (seen.has(target - n)) return [seen.get(target - n), i];
    seen.set(n, i);
  }
};
const isAnagram = (a, b) => [...a].sort().join("") === [...b].sort().join("");
const isBalanced = (s) => {
  const pairs = { ")": "(", "]": "[", "}": "{" }, stack = [];
  for (const ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (pairs[ch] && stack.pop() !== pairs[ch]) return false;
  }
  return !stack.length;
};
const countWords = (str) => str.toLowerCase().match(/\w+/g).reduce((m, w) => ((m[w] = (m[w] || 0) + 1), m), {});
console.log(twoSum([2, 7, 11, 15], 9), isAnagram("listen", "silent"), isBalanced("{[()]}"), countWords("the cat the dog"));

// EXERCISE: Promise.all, Promise.race, call, apply ke polyfills khud likho aur test karo.
