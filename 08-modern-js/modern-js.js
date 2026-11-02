// 08 - Modern JavaScript (ES6+)

// 1. Iterators aur Generators
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}
const ids = idGenerator();
console.log(ids.next().value, ids.next().value);

function* take(gen, n) { for (const v of gen) { if (n-- <= 0) return; yield v; } }
console.log([...take(idGenerator(), 3)]);

// Custom iterable
const range = {
  from: 1, to: 4,
  [Symbol.iterator]() {
    let cur = this.from, end = this.to;
    return { next: () => (cur <= end ? { value: cur++, done: false } : { value: undefined, done: true }) };
  },
};
console.log([...range]);

// 2. Symbol
const ID = Symbol("id");
const obj = { [ID]: 123, name: "Anil" };
console.log(Object.keys(obj), obj[ID]);

// 3. Proxy aur Reflect: object ke operations intercept karo
const validator = new Proxy({}, {
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") throw new TypeError("age number honi chahiye");
    return Reflect.set(target, prop, value);
  },
  get: (target, prop) => (prop in target ? target[prop] : `no ${String(prop)}`),
});
validator.age = 22;
console.log(validator.age, validator.missing);
try { validator.age = "x"; } catch (e) { console.log(e.message); }

// 4. Debounce aur Throttle
function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}
function throttle(fn, limit) {
  let last = 0;
  return (...args) => { const now = Date.now(); if (now - last >= limit) { last = now; fn(...args); } };
}
const log = debounce((x) => console.log("debounced:", x), 30);
log(1); log(2); log(3);                    // sirf last chalega
const th = throttle((x) => console.log("throttled:", x), 100);
th("a"); th("b");                          // sirf pehla chalega

// 5. Naye features
console.log([1, 2, 3].at(-1), Object.fromEntries([["a", 1]]), "a-b".replaceAll("-", "_"));
console.log([3, 1, 2].toSorted(), Object.groupBy?.([1, 2, 3, 4], (n) => (n % 2 ? "odd" : "even")));
console.log(structuredClone({ a: [1, { b: 2 }] }));
const { a = 1, ...others } = { b: 2, c: 3 };
console.log(a, others);

// 6. Optional catch, nullish assignment
let config = { port: null };
config.port ??= 3000;
config.host ||= "localhost";
console.log(config);
try { JSON.parse("{bad"); } catch { console.log("optional catch binding"); }

// 7. Dynamic import (modules)
const path = await import("node:path");
console.log(path.basename("/a/b/file.js"));

// 8. Tagged template
const tag = (strings, ...vals) => strings.reduce((out, s, i) => out + s + (vals[i] !== undefined ? `[${vals[i]}]` : ""), "");
console.log(tag`Hello ${"Anil"}, age ${22}`);

// 9. Regex: named groups
const m = "2026-11-02".match(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/);
console.log(m.groups);

// EXERCISE:
// 1. Fibonacci generator banao aur pehle 10 numbers print karo
// 2. Proxy se aisa object banao jo negative array index support kare (arr[-1])
// 3. Throttle ka leading + trailing version likho
