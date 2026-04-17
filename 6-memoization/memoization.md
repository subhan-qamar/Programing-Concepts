# 🧠 Memory & Execution Model (VERY IMPORTANT)

Understanding this section is **crucial** for mastering JavaScript behavior, debugging, and interviews.

---

## 📚 Call Stack

A stack data structure that keeps track of function execution.

```js id="xq7k2m"
function one() {
  two();
}

function two() {
  console.log("Inside two");
}

one();
```

### 🧠 How it works:

1. `one()` is pushed to stack
2. `two()` is called → pushed
3. `two()` finishes → popped
4. `one()` finishes → popped

✔️ Last In → First Out (LIFO)

---

## ⚙️ Execution Context

Environment where code is evaluated and executed.

### Types:

* Global Execution Context (GEC)
* Function Execution Context (FEC)

---

## 🌍 Global Context

Created when program starts.

```js id="y74bpl"
let x = 10;
function test() {}
```

### Contains:

* Global object (`window` / `global`)
* `this`
* Variables & functions

---

## 🔧 Function Context

Created every time a function is called.

```js id="e8px6w"
function greet(name) {
  let msg = "Hello " + name;
  return msg;
}
```

Each call gets:

* Its own variables
* Arguments
* Scope reference

---

## 🔗 Scope Chain

Mechanism to find variables.

```js id="4k2q5u"
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }

  inner();
}
```

### 🧠 Lookup order:

1. Local scope
2. Outer scope
3. Global scope
4. If not found → error

---

## 🧹 Garbage Collection

Automatic memory cleanup.

### 🧠 Key idea:

* Removes unused objects from memory

```js id="o4b6qk"
let obj = { name: "Ali" };
obj = null; // eligible for garbage collection
```

✔️ JavaScript uses **mark-and-sweep algorithm**

---

## 🧱 Stack vs Heap Memory

### 🔹 Stack Memory

* Stores **primitive values**
* Fast access
* Fixed size

```js id="n0p3v6"
let x = 10;
let y = x;
```

✔️ Copy by value

---

### 🔹 Heap Memory

* Stores **objects, arrays, functions**
* Dynamic size

```js id="g3jw4v"
let obj1 = { name: "Ali" };
let obj2 = obj1;
```

✔️ Copy by reference

---

## ⚠️ Key Difference

```js id="5jrfk7"
let a = 10;
let b = a;

b = 20;
console.log(a); // 10 (independent)
```

```js id="pg6g5g"
let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Ahmed";
console.log(obj1.name); // "Ahmed" (same reference)
```

---

## 🧾 Summary Table

| Concept            | Key Idea                   |
| ------------------ | -------------------------- |
| Call Stack         | Tracks function calls      |
| Execution Context  | Code execution environment |
| Global Context     | Runs first                 |
| Function Context   | Created per function       |
| Scope Chain        | Variable lookup            |
| Garbage Collection | Memory cleanup             |
| Stack              | Primitive storage          |
| Heap               | Reference storage          |

---

## 🚀 Why This Matters

* Prevent memory leaks
* Understand closures deeply
* Debug async behavior
* Crack interviews confidently

---
