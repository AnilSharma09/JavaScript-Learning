// 03 - Arrays aur unke methods

const nums = [1, 2, 3, 4, 5];

// Add / remove
const arr = [10, 20];
arr.push(30);      // end mein add
arr.unshift(0);    // start mein add
arr.pop();         // end se hatao
arr.shift();       // start se hatao
console.log(arr);

// Transform: map, filter, reduce (sabse important)
console.log("map   ", nums.map((n) => n * 2));
console.log("filter", nums.filter((n) => n % 2 === 0));
console.log("reduce", nums.reduce((total, n) => total + n, 0));

// Search / check
console.log("find     ", nums.find((n) => n > 2));
console.log("findIndex", nums.findIndex((n) => n > 2));
console.log("some     ", nums.some((n) => n > 4));
console.log("every    ", nums.every((n) => n > 0));
console.log("includes ", nums.includes(3), nums.indexOf(3));

// slice (original nahi badalta) vs splice (badalta hai)
const copy = [...nums];
console.log("slice ", copy.slice(1, 3), copy);
console.log("splice", copy.splice(1, 2), copy);

// sort: comparator zaroori hai, nahi to string ki tarah sort hota hai
console.log([10, 9, 1, 2].sort());
console.log([10, 9, 1, 2].sort((a, b) => a - b));

// Others
console.log(nums.join("-"), nums.concat([6]), [[1, 2], [3]].flat(), Array.from({ length: 3 }, (_, i) => i * 2));
console.log([...nums].reverse(), nums.at(-1));

// Real example: objects ki array
const students = [
  { name: "Anil", marks: 90, passed: true },
  { name: "Ravi", marks: 40, passed: false },
  { name: "Sita", marks: 75, passed: true },
];
const names = students.map((s) => s.name);
const toppers = students.filter((s) => s.marks >= 75);
const average = students.reduce((t, s) => t + s.marks, 0) / students.length;
const byName = students.reduce((acc, s) => ({ ...acc, [s.name]: s.marks }), {});
console.log(names, toppers.length, average.toFixed(1), byName);

// Group by (reduce ka kamaal)
const grouped = students.reduce((acc, s) => {
  const key = s.passed ? "pass" : "fail";
  (acc[key] ||= []).push(s.name);
  return acc;
}, {});
console.log(grouped);

// EXERCISE:
// 1. Duplicate hata do: [1,2,2,3,3] -> [1,2,3] (Set ke bina aur Set ke saath)
// 2. Nested array flatten karo bina .flat() ke
// 3. Array ko chunks mein todo: chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
