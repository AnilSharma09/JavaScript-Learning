// 05 - this, call, apply, bind

const user = {
  name: "Anil",
  show() { return this.name; },          // regular method: this = object
  arrow: () => typeof this,              // arrow: this bahar se leta hai (module mein undefined)
  later() {
    setTimeout(() => console.log("arrow ke andar this:", this.name), 0); // arrow = this sahi
  },
};

console.log(user.show());

// this kho jata hai jab method alag nikalo
const detached = user.show;
try {
  console.log(detached());
} catch (e) {
  console.log("detached this problem:", e.name); // strict mode (ES module) mein this undefined hota hai
}

// call / apply / bind
function intro(city, country) {
  return `${this.name} from ${city}, ${country}`;
}
console.log(intro.call({ name: "Anil" }, "Jaipur", "India"));      // arguments alag-alag
console.log(intro.apply({ name: "Ravi" }, ["Delhi", "India"]));    // arguments array mein
const bound = intro.bind({ name: "Sita" }, "Mumbai");              // naya function banata hai
console.log(bound("India"));

user.later();

// new ke saath this naya object hota hai
function Person(name) { this.name = name; }
console.log(new Person("Test").name);

// Rules ka summary
// 1. new          -> naya object
// 2. call/apply/bind -> jo pass karo
// 3. obj.method() -> obj
// 4. plain function() -> undefined (strict) / global (non-strict)
// 5. arrow        -> lexical (bahar wale ka this)

// Polyfill: bind khud likho
Function.prototype.myBind = function (ctx, ...preset) {
  const fn = this;
  return function (...args) {
    return fn.apply(ctx, [...preset, ...args]);
  };
};
console.log(intro.myBind({ name: "Custom" }, "Pune")("India"));

// EXERCISE:
// 1. call/apply ka polyfill (myCall, myApply) likho
// 2. Arrow function ko method banake dekho kya hota hai, aur kyun
