// 07 - Asynchronous JavaScript

const wait = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));
const failAfter = (ms, msg) => new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms));

// 1. Event loop order: sync -> microtask (Promise) -> macrotask (setTimeout)
console.log("1 sync");
setTimeout(() => console.log("5 macrotask: setTimeout"), 0);
Promise.resolve().then(() => console.log("3 microtask: promise"));
queueMicrotask(() => console.log("4 microtask: queueMicrotask"));
console.log("2 sync");

// 2. Callback hell (purana tareeka)
function getUserCb(id, cb) { setTimeout(() => cb(null, { id, name: "Anil" }), 10); }
getUserCb(1, (err, user) => console.log("callback:", user.name));

// 3. Promise chain
await wait(50);
await wait(10, "chain")
  .then((v) => v.toUpperCase())
  .then((v) => console.log("then:", v))
  .catch((e) => console.log("error:", e.message))
  .finally(() => console.log("finally chalta hai"));

// 4. async/await + error handling
async function fetchUser(id) {
  await wait(10);
  if (id < 0) throw new Error("Invalid id");
  return { id, name: "Anil" };
}
try {
  console.log("await:", await fetchUser(1));
  await fetchUser(-1);
} catch (err) {
  console.log("caught:", err.message);
}

// 5. Sequential vs Parallel
console.time("sequential");
await wait(100); await wait(100);
console.timeEnd("sequential");        // ~200ms

console.time("parallel");
await Promise.all([wait(100), wait(100)]);
console.timeEnd("parallel");          // ~100ms

// 6. Promise combinators
console.log("all       ", await Promise.all([wait(10, "a"), wait(20, "b")]));
console.log("allSettled", (await Promise.allSettled([wait(10, "ok"), failAfter(10, "bad")])).map((r) => r.status));
console.log("race      ", await Promise.race([wait(50, "slow"), wait(10, "fast")]));
console.log("any       ", await Promise.any([failAfter(10, "x"), wait(20, "first success")]));

// 7. Timeout wrapper
const withTimeout = (promise, ms) =>
  Promise.race([promise, failAfter(ms, "Timeout")]);
try {
  await withTimeout(wait(200), 50);
} catch (e) {
  console.log("timeout:", e.message);
}

// 8. Retry with backoff
async function retry(fn, times = 3, delay = 10) {
  for (let i = 1; i <= times; i++) {
    try { return await fn(i); }
    catch (e) { if (i === times) throw e; await wait(delay * 2 ** i); }
  }
}
console.log("retry:", await retry(async (n) => { if (n < 3) throw new Error("fail"); return `success on try ${n}`; }));

// 9. Real API call (Node 18+ mein fetch built-in hai)
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  console.log("fetch:", (await res.json()).name);
} catch (e) {
  console.log("fetch skip (network nahi ya block):", e.message);
}

// 10. Promise khud banana
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let done = 0;
    if (!promises.length) return resolve(results);
    promises.forEach((p, i) =>
      Promise.resolve(p).then((v) => {
        results[i] = v;
        if (++done === promises.length) resolve(results);
      }, reject)
    );
  });
}
console.log("myPromiseAll:", await myPromiseAll([wait(20, 1), 2, wait(5, 3)]));

// EXERCISE:
// 1. Output predict karo: async function f(){ console.log(1); await null; console.log(2) } f(); console.log(3)
// 2. Concurrency limit wala runner likho (ek time par max 3 promises)
// 3. Promise.race ka polyfill likho
