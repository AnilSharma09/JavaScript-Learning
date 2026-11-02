// 06 - OOP: Prototype, Classes, Inheritance

// Constructor function + prototype (classes ke peeche yahi hota hai)
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};
const dog = new Animal("Tommy");
console.log(dog.speak(), Object.getPrototypeOf(dog) === Animal.prototype);

// Prototype chain: dog -> Animal.prototype -> Object.prototype -> null
console.log(dog.hasOwnProperty("name"), dog.hasOwnProperty("speak"), "speak" in dog);

// ES6 Class
class Person {
  #salary = 0;                 // private field
  static count = 0;            // class level

  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.count++;
  }

  greet() { return `Hi, ${this.name}`; }

  get salary() { return this.#salary; }
  set salary(v) {
    if (v < 0) throw new Error("Salary negative nahi ho sakti");
    this.#salary = v;
  }

  static create(name) { return new Person(name, 18); }
  toString() { return `${this.name} (${this.age})`; }
}

const p = new Person("Anil", 22);
p.salary = 50000;
console.log(p.greet(), p.salary, `${p}`, Person.count);
try { p.salary = -1; } catch (e) { console.log(e.message); }

// Inheritance
class Student extends Person {
  constructor(name, age, roll) {
    super(name, age);          // parent constructor
    this.roll = roll;
  }
  greet() { return `${super.greet()}, roll ${this.roll}`; } // method override
}
const s = new Student("Ravi", 20, 7);
console.log(s.greet(), s instanceof Student, s instanceof Person);

// Polymorphism
class Shape { area() { return 0; } }
class Circle extends Shape { constructor(r) { super(); this.r = r; } area() { return +(Math.PI * this.r ** 2).toFixed(2); } }
class Rect extends Shape { constructor(w, h) { super(); this.w = w; this.h = h; } area() { return this.w * this.h; } }
console.log([new Circle(2), new Rect(3, 4)].map((sh) => sh.area()));

// Object.create
const proto = { hello() { return "hello from proto"; } };
const child = Object.create(proto);
console.log(child.hello());

// Encapsulation: closure se private data (class se pehle ka tareeka)
function makeAccount(balance) {
  return { deposit: (n) => (balance += n), getBalance: () => balance };
}
const acc = makeAccount(100);
acc.deposit(50);
console.log(acc.getBalance());

// Mixin: multiple behaviours jodna
const Flyer = (Base) => class extends Base { fly() { return `${this.name} flies`; } };
class Bird extends Flyer(Animal) {}
console.log(new Bird("Tweety").fly());

// EXERCISE:
// 1. Stack aur Queue class banao (push/pop/peek, enqueue/dequeue)
// 2. BankAccount class: private balance, withdraw mein insufficient funds error
// 3. EventEmitter class khud likho (on, off, emit)
