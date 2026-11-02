// 01 - Operators, Conditions, Loops

// Equality: hamesha === use karo
console.log(5 == "5", 5 === "5", null == undefined, null === undefined, NaN === NaN);

// Logical + short-circuit
console.log(true && "yes", false || "default", null ?? "fallback", 0 ?? "zero ko nahi chhodta", 0 || "zero ko chhod deta hai");

// Optional chaining
const user = { profile: { city: "Jaipur" } };
console.log(user?.profile?.city, user?.address?.city);

// Ternary
const age = 20;
console.log(age >= 18 ? "adult" : "minor");

// Falsy values: false, 0, "", null, undefined, NaN
const falsy = [false, 0, "", null, undefined, NaN];
console.log(falsy.map((v) => Boolean(v)));

// if / else if
const marks = 76;
if (marks >= 90) console.log("A+");
else if (marks >= 75) console.log("A");
else console.log("B");

// switch
const day = "Mon";
switch (day) {
  case "Mon":
    console.log("Monday");
    break;
  default:
    console.log("Other");
}

// Loops
for (let i = 0; i < 3; i++) console.log("for", i);

let n = 0;
while (n < 2) console.log("while", n++);

for (const item of ["a", "b"]) console.log("for...of", item);   // arrays/strings ke liye
for (const key in { x: 1, y: 2 }) console.log("for...in", key); // objects ke liye

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  console.log("continue/break", i);
}

// EXERCISE:
// 1. FizzBuzz (1 se 100): 3 ka multiple -> Fizz, 5 ka -> Buzz, dono -> FizzBuzz
// 2. Number prime hai ya nahi, function likho
