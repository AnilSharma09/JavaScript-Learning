// 03 - Objects, Destructuring, Spread, Map/Set

const user = { name: "Anil", age: 22, skills: ["JS", "QA"], address: { city: "Jaipur" } };

console.log(user.name, user["age"]);
user.email = "a@b.com";
delete user.age;
console.log(Object.keys(user), Object.values(user).length, Object.entries(user)[0]);

// Destructuring
const { name, skills: [firstSkill], address: { city } } = user;
const { missing = "default" } = user;
console.log(name, firstSkill, city, missing);

const [x, y, ...rest] = [1, 2, 3, 4];
console.log(x, y, rest);

// Swap
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);

// Spread: copy + override
const updated = { ...user, name: "Anil Sharma" };
console.log(updated.name, user.name);

// Shallow vs deep copy
const shallow = { ...user };
shallow.address.city = "Delhi";
console.log("shallow ne original badal diya:", user.address.city);
const deep = structuredClone(user);
deep.address.city = "Mumbai";
console.log("deep ne nahi badla:", user.address.city);

// Computed property, shorthand, methods
const key = "score";
const player = { [key]: 100, name, greet() { return `Hi ${this.name}`; } };
console.log(player.greet(), player.score);

// freeze: object ko lock karo
const frozen = Object.freeze({ a: 1 });
try {
  frozen.a = 2; // strict mode (ES modules) mein error aata hai, non-strict mein chup-chaap ignore hota hai
} catch (e) {
  console.log("freeze error:", e.name);
}
console.log(frozen.a); // 1

// Getter / Setter
const temp = {
  _c: 25,
  get f() { return this._c * 9 / 5 + 32; },
  set f(v) { this._c = (v - 32) * 5 / 9; },
};
console.log(temp.f);
temp.f = 212;
console.log(temp._c);

// Object.fromEntries / entries
const prices = { apple: 10, mango: 20 };
const doubled = Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2]));
console.log(doubled);

// Set: unique values
const unique = [...new Set([1, 2, 2, 3, 3])];
console.log(unique);

// Map: kisi bhi type ki key
const map = new Map();
map.set("a", 1).set({ id: 1 }, "object key");
console.log(map.size, map.get("a"));
for (const [k, v] of map) console.log(k, v);

// WeakMap/WeakSet: keys garbage collect ho sakti hain (advanced)

// EXERCISE:
// 1. Do objects ko deep merge karo
// 2. Array of words mein har word ki frequency count karo (object ya Map se)
// 3. Object ke keys ko underscore se camelCase mein badlo
