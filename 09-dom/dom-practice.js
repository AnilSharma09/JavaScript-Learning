// 09 - DOM Manipulation: index.html ke saath Live Server se chalao

const $ = (sel) => document.querySelector(sel);

// 1. Content aur class
$("#changeBtn").addEventListener("click", () => {
  $("#text").textContent = `Badal gaya: ${new Date().toLocaleTimeString()}`;
});
$("#toggleBtn").addEventListener("click", () => $("#text").classList.toggle("active"));

// 2. Create / remove + event delegation (ek listener parent par)
const list = $("#list");
$("#addBtn").addEventListener("click", () => {
  const input = $("#itemInput");
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement("li");
  li.textContent = value;           // textContent use karo, innerHTML se XSS ka khatra
  list.appendChild(li);
  input.value = "";
  input.focus();
});
list.addEventListener("click", (e) => {
  if (e.target.matches("li")) e.target.remove();
});

// 3. Form validation
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();                // page reload roko
  const email = $("#email").value.trim();
  const password = $("#password").value;
  const msg = $("#formMsg");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  msg.className = "error";
  if (!emailOk) return (msg.textContent = "Valid email daalo");
  if (password.length < 8) return (msg.textContent = "Password kam se kam 8 characters");
  msg.className = "";
  msg.textContent = "Form valid hai";
});

// 4. Mouse / keyboard events
const box = $("#box");
box.addEventListener("mouseenter", () => (box.style.background = "#cfc"));
box.addEventListener("mouseleave", () => (box.style.background = ""));
box.addEventListener("mousemove", (e) => (box.textContent = `x:${e.offsetX} y:${e.offsetY}`));
document.addEventListener("keydown", (e) => {
  $("#keyOut").textContent = `key: ${e.key}, code: ${e.code}, ctrl: ${e.ctrlKey}`;
});

// 5. Fetch + render
$("#loadBtn").addEventListener("click", async () => {
  const ul = $("#users");
  ul.innerHTML = "<li>Loading...</li>";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();
    ul.replaceChildren(...users.map((u) => Object.assign(document.createElement("li"), { textContent: `${u.name} (${u.email})` })));
  } catch (err) {
    ul.innerHTML = `<li class="error">Error: ${err.message}</li>`;
  }
});

// 6. localStorage: theme yaad rakho
const applyTheme = (t) => {
  document.body.style.background = t === "dark" ? "#222" : "";
  document.body.style.color = t === "dark" ? "#eee" : "";
};
applyTheme(localStorage.getItem("theme"));
$("#themeBtn").addEventListener("click", () => {
  const next = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// 7. IntersectionObserver: element screen par aaye to action
const observer = new IntersectionObserver((entries) => {
  entries.forEach((en) => en.isIntersecting && console.log("visible:", en.target.tagName));
});
document.querySelectorAll("section").forEach((s) => observer.observe(s));

// EXERCISE:
// 1. Counter banao (+, -, reset) aur value localStorage mein save karo
// 2. Search input par debounce lagake list filter karo
// 3. Drag and drop se list items reorder karo
