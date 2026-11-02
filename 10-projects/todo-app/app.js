// To-do app: array state + localStorage + DOM render + event delegation

const STORAGE_KEY = "todos-v1";
const $ = (sel) => document.querySelector(sel);

const load = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []; }
  catch { return []; }
};

const state = { todos: load(), filter: "all" };

const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));

const visible = () =>
  state.todos.filter((t) => (state.filter === "active" ? !t.done : state.filter === "done" ? t.done : true));

function render() {
  const list = $("#list");
  list.replaceChildren(
    ...visible().map((t) => {
      const li = document.createElement("li");
      li.dataset.id = t.id;
      li.className = t.done ? "done" : "";

      const check = Object.assign(document.createElement("input"), { type: "checkbox", checked: t.done });
      check.dataset.action = "toggle";
      const text = Object.assign(document.createElement("span"), { textContent: t.text }); // XSS safe
      const del = Object.assign(document.createElement("button"), { textContent: "X", className: "del" });
      del.dataset.action = "delete";

      li.append(check, text, del);
      return li;
    })
  );

  const left = state.todos.filter((t) => !t.done).length;
  $("#count").textContent = `${left} kaam baaki`;
  document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("active", b.dataset.filter === state.filter));
}

function update(fn) {
  fn();
  save();
  render();
}

$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = $("#input").value.trim();
  if (!text) return;
  update(() => state.todos.push({ id: crypto.randomUUID(), text, done: false }));
  e.target.reset();
});

// Event delegation: ek listener poori list ke liye
$("#list").addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const id = e.target.closest("li")?.dataset.id;
  if (!action || !id) return;
  if (action === "toggle") update(() => { const t = state.todos.find((x) => x.id === id); t.done = !t.done; });
  if (action === "delete") update(() => (state.todos = state.todos.filter((x) => x.id !== id)));
});

document.querySelector(".filters").addEventListener("click", (e) => {
  if (e.target.dataset.filter) update(() => (state.filter = e.target.dataset.filter));
});

$("#clearDone").addEventListener("click", () => update(() => (state.todos = state.todos.filter((t) => !t.done))));

render();

// EXERCISE (features add karo):
// 1. Double-click se task edit karna
// 2. Due date aur sorting
// 3. Drag and drop reorder
// 4. Undo last delete
