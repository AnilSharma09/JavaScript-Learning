// 04 - Strings, Numbers, Math, Date

// Strings
const s = "  Hello World  ";
console.log(s.trim(), s.length, s.toUpperCase(), s.trim().toLowerCase());
console.log("Hello".includes("ell"), "Hello".startsWith("He"), "Hello".endsWith("lo"));
console.log("Hello".slice(1, 4), "Hello".substring(1, 3), "Hello".at(-1), "Hello"[0]);
console.log("a,b,c".split(","), "Hello".replace("l", "L"), "Hello".replaceAll("l", "L"));
console.log("5".padStart(3, "0"), "ab".repeat(3), "Hello".charAt(1), "Hello".indexOf("l"));

// Reverse + palindrome
const reverse = (str) => [...str].reverse().join("");
const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === reverse(clean);
};
console.log(reverse("hello"), isPalindrome("A man, a plan, a canal: Panama"));

// Numbers
console.log(0.1 + 0.2, (0.1 + 0.2).toFixed(2), +(0.1 + 0.2).toFixed(2));
console.log(Number.isInteger(5), Number.isNaN(NaN), parseInt("101", 2), (255).toString(16));
console.log(Number.MAX_SAFE_INTEGER, 1 / 0, -1 / 0);

// Math
console.log(Math.floor(4.7), Math.ceil(4.1), Math.round(4.5), Math.trunc(-4.7));
console.log(Math.max(1, 5, 3), Math.min(...[4, 2, 8]), Math.abs(-5), Math.pow(2, 3), Math.sqrt(16));
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log("random 1-10:", randomInt(1, 10));

// Date
const now = new Date("2026-11-02T10:30:00Z");
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getDay()); // month 0-based hota hai
console.log(now.toISOString());
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log(tomorrow.toISOString().slice(0, 10));
const daysBetween = (a, b) => Math.round((b - a) / 86400000);
console.log(daysBetween(new Date("2026-01-01"), new Date("2026-12-31")));

// Intl: formatting
console.log(new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(1234567.5));
console.log(new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(now));

// Regex basics
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(email.test("a@b.com"), email.test("abc"));
console.log("My phone 9876543210".match(/\d{10}/)[0]);

// EXERCISE:
// 1. Sentence mein sabse lambe word ko dhoondo
// 2. Title Case banao: "hello world" -> "Hello World"
// 3. Kisi ki age nikalo birth date se
