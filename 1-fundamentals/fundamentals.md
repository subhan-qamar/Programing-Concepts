# 🟢 Fundamentals of Programming (JavaScript Focus)

---

## 🧾 Syntax

Rules that define how code must be written.

```js
let x = 10; // valid syntax
```

❌ Missing semicolons, brackets, or wrong structure → syntax errors

---

## 🧠 Semantics

Meaning of the code (what it does).

```js
let x = "10" + 5; // "105" (string concatenation)
```

✔️ Syntax is correct, but understanding output = semantics

---

## 🔑 Keywords & Identifiers

### 🔹 Keywords

Reserved words with special meaning:

```js
let, const, function, return, if
```

### 🔹 Identifiers

Names for variables, functions, etc.

```js
let userName = "Ali";
```

✔️ Must not start with numbers, no spaces, not keywords

---

## 📦 Variables

### 🔹 Declaration

Creating a variable:

```js
let age;
```

### 🔹 Initialization

Assigning a value:

```js
age = 22;
```

### 🔹 Declaration + Initialization

```js
let age = 22;
```

---

## 🌍 Scope

### 🔹 Block Scope

Accessible within `{}`

```js
{
  let x = 10;
}
// x ❌ not accessible here
```

### 🔹 Function Scope

Accessible within a function

```js
function test() {
  var x = 5;
}
```

### 🔹 Global Scope

Accessible everywhere

```js
let x = 100;
```

---

## ⬆️ Hoisting (JavaScript-Specific)

Variables and functions are moved to the top during execution.

```js
console.log(x); // undefined
var x = 5;
```

⚠️ `let` and `const` are hoisted but not initialized (TDZ)

---

## 🧬 Data Types

### 🔹 Primitive Types

* Number
* String
* Boolean
* Null
* Undefined
* Symbol
* BigInt

```js
let num = 10;
let text = "Hello";
```

---

### 🔹 Non-Primitive (Reference Types)

* Objects
* Arrays
* Functions

```js
let obj = { name: "Ali" };
let arr = [1, 2, 3];
```

---

## ⚖️ Type Systems

### 🔹 Static vs Dynamic Typing

* **Static** → Type fixed at compile time (e.g., C++)
* **Dynamic** → Type decided at runtime (JavaScript)

```js
let x = 10;
x = "hello"; // allowed
```

---

### 🔹 Strong vs Weak Typing

* **Strong** → strict type rules
* **Weak** → implicit conversions allowed

```js
"5" - 2; // 3 (type coercion)
```

---

### 🔹 Type Inference

Language automatically detects type.

```js
let x = 10; // inferred as number
```

---

## ➕ Operators

### 🔹 Arithmetic Operators

```js
+  -  *  /  %  **
```

---

### 🔹 Comparison Operators

```js
==  ===  !=  !==  >  <  >=  <=
```

---

### 🔹 Logical Operators

```js
&&  ||  !
```

---

### 🔹 Bitwise Operators

Operate at binary level:

```js
&  |  ^  ~  <<  >>
```

---

### 🔹 Assignment Operators

```js
=  +=  -=  *=  /=
```

---

### 🔹 Ternary Operator

Short form of `if-else`

```js
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 🧾 Summary Table

| Concept        | Key Idea           |
| -------------- | ------------------ |
| Syntax         | Structure of code  |
| Semantics      | Meaning of code    |
| Variables      | Store data         |
| Scope          | Accessibility      |
| Hoisting       | Moved to top       |
| Primitive      | Simple values      |
| Reference      | Objects/arrays     |
| Dynamic Typing | Types change       |
| Operators      | Perform operations |

---

## 🚀 When to Focus On

* **Syntax + Semantics** → writing correct code
* **Scope + Hoisting** → debugging issues
* **Data Types** → avoiding bugs
* **Operators** → core logic building

---
