# 🧬 Advanced JavaScript Concepts

---

## 🔑 `this` Keyword

Refers to the context in which a function is executed.

```js
const obj = {
  name: "Ali",
  greet() {
    console.log(this.name);
  }
};

obj.greet(); // "Ali"
```

### 🧠 Key Rules:

* Global → `window` (browser) / `global` (Node)
* Object method → object itself
* Arrow function → inherits from parent scope

---

## 🔗 `bind`, `call`, `apply`

Used to control `this`.

```js
function greet() {
  console.log(this.name);
}

const user = { name: "Ali" };

greet.call(user);   // Ali
greet.apply(user);  // Ali

const bound = greet.bind(user);
bound();            // Ali
```

### Difference:

* `call` → arguments separately
* `apply` → arguments as array
* `bind` → returns new function

---

## 🧩 Prototypes

Objects inherit properties from other objects.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};
```

---

## 🔗 Prototype Chain

JavaScript looks up properties through a chain.

```js
let arr = [];
arr.__proto__ === Array.prototype; // true
```

🧠 If not found → goes up → ends at `null`

---

## 🧬 Inheritance (JS Style)

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes noise");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const d = new Dog("Buddy");
d.speak();
```

---

## 🏛️ ES6 Classes

Cleaner syntax over prototypes.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}
```

### Inheritance with Classes

```js
class Dog extends Person {
  bark() {
    console.log("Woof!");
  }
}
```

---

## 📦 Modules

### 🔹 CommonJS

Used in Node.js

```js
// export
module.exports = function() {};

// import
const fn = require("./file");
```

---

### 🔹 ES Modules (ESM)

```js
// export
export const name = "Ali";

// import
import { name } from "./file.js";
```

✔️ Modern standard

---

## 🔄 Iterators & Generators

### 🔹 Iterator

Object with `next()` method.

```js
const arr = [1, 2];
const iterator = arr[Symbol.iterator]();

iterator.next(); // { value: 1, done: false }
```

---

### 🔹 Generator

Function that can pause execution.

```js
function* gen() {
  yield 1;
  yield 2;
}

const g = gen();
g.next(); // { value: 1, done: false }
```

---

## 🔣 Symbols

Unique and immutable identifiers.

```js
const id = Symbol("id");

let obj = {
  [id]: 123
};
```

✔️ Avoid property name conflicts

---

## 🪞 Reflect API

Provides methods for object operations.

```js
const obj = { a: 1 };

Reflect.get(obj, "a"); // 1
Reflect.set(obj, "b", 2);
```

✔️ Cleaner alternative to Object methods

---

## 🛡️ Proxy API

Used to intercept operations on objects.

```js
const target = {
  message: "Hello"
};

const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "Not found";
  }
});

proxy.message; // "Hello"
proxy.test;    // "Not found"
```

---

## 🧾 Summary Table

| Concept         | Key Idea             |
| --------------- | -------------------- |
| this            | Execution context    |
| bind/call/apply | Control `this`       |
| Prototype       | Shared properties    |
| Prototype Chain | Lookup mechanism     |
| Inheritance     | Reuse behavior       |
| Classes         | Modern syntax        |
| Modules         | Code organization    |
| Iterators       | Controlled iteration |
| Generators      | Pause/resume         |
| Symbols         | Unique keys          |
| Reflect         | Object utilities     |
| Proxy           | Intercept operations |

---

## 🚀 When to Use

* **this + bind** → control context
* **Prototypes** → memory-efficient methods
* **Classes** → clean OOP structure
* **Modules** → scalable apps
* **Generators** → async/stream-like logic
* **Proxy** → validation, logging, security

---
