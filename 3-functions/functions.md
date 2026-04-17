# 🧩 Functions (JavaScript)

## 📌 Function Declaration

A named function defined using the `function` keyword.

```js
function greet(name) {
  return "Hello " + name;
}
```

✅ Hoisted (can be used before declaration)

---

## 📌 Function Expression

A function assigned to a variable.

```js
const greet = function(name) {
  return "Hello " + name;
};
```

❌ Not hoisted like declarations

---

## ⚡ Arrow Functions

Shorter syntax, no own `this`.

```js
const greet = (name) => {
  return "Hello " + name;
};

// Short form
const greetShort = name => "Hello " + name;
```

---

## 🧾 Parameters

Inputs passed into functions.

```js
function add(a, b) {
  return a + b;
}
```

---

## 🔹 Default Parameters

Provide fallback values.

```js
function greet(name = "Guest") {
  return "Hello " + name;
}
```

---

## 🔹 Rest Parameters

Collect multiple arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

## 📦 Arguments Object

Special object available in regular functions.

```js
function showArgs() {
  console.log(arguments);
}
```

⚠️ Not available in arrow functions

---

## 🔁 Return Values

Functions can return values.

```js
function square(x) {
  return x * x;
}
```

If no `return`, result is `undefined`.

---

## 🧠 Higher-Order Functions

Functions that take or return other functions.

```js
function operate(a, b, fn) {
  return fn(a, b);
}
```

---

## 🔗 Callback Functions

Functions passed as arguments.

```js
function processUser(name, callback) {
  callback(name);
}

processUser("Ali", (n) => console.log(n));
```

---

## ⚖️ Pure vs Impure Functions

### ✅ Pure Function

* Same input → same output
* No side effects

```js
function add(a, b) {
  return a + b;
}
```

### ❌ Impure Function

* Depends on external state

```js
let count = 0;
function increment() {
  count++;
}
```

---

## 🔁 Recursion

Function calling itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

---

## 🚀 Tail Recursion

Optimized recursion where recursive call is last operation.

```js
function factorial(n, acc = 1) {
  if (n === 0) return acc;
  return factorial(n - 1, n * acc);
}
```

⚠️ Not fully optimized in JavaScript engines

---

## 🔒 Closures

Function remembers its outer scope.

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)

Runs immediately after definition.

```js
(function() {
  console.log("I run instantly!");
})();
```

---

## 🧾 Summary

| Concept        | Key Idea                  |
| -------------- | ------------------------- |
| Declaration    | Named, hoisted            |
| Expression     | Stored in variable        |
| Arrow Function | Short syntax, no `this`   |
| Parameters     | Inputs to function        |
| Rest           | Multiple args → array     |
| Callback       | Function as argument      |
| Higher-Order   | Uses/returns functions    |
| Pure           | No side effects           |
| Recursion      | Calls itself              |
| Closure        | Remembers outer variables |
| IIFE           | Runs instantly            |

---

## 🚀 When to Use

* **Arrow Functions** → short, inline logic
* **Closures** → data privacy / state
* **Callbacks** → async or flexible behavior
* **Recursion** → tree/loop problems
* **HOFs** → reusable logic

---
