# 🔁 Control Flow (JavaScript)

Control flow determines how your program executes based on conditions, loops, and statements.

---

## 🔀 Conditional Statements

### 📌 `if / else`

Executes code based on a condition.

```js id="v1r8bx"
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### 📌 `else if`

Handle multiple conditions.

```js id="o4z3mr"
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
```

---

### 🔄 `switch`

Used for multiple specific cases.

```js id="g5k7pz"
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}
```

⚠️ Always use `break` to prevent fall-through.

---

## 🔁 Loops

### 📌 `for`

Best when iteration count is known.

```js id="r9y1hf"
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 📌 `while`

Runs while condition is true.

```js id="1apx5m"
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

### 📌 `do...while`

Runs at least once.

```js id="c5gk3w"
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### 📌 `for...in`

Iterates over object keys.

```js id="q2p9lb"
let obj = { name: "Ali", age: 22 };

for (let key in obj) {
  console.log(key, obj[key]);
}
```

⚠️ Not recommended for arrays

---

### 📌 `for...of`

Iterates over iterable values (arrays, strings, etc.)

```js id="8m3nqd"
let arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}
```

---

## ⛔ Control Statements

### 🔹 `break`

Stops loop or switch.

```js id="8pkj2x"
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

---

### 🔹 `continue`

Skips current iteration.

```js id="q9r5te"
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

---

### 🔹 `return`

Exits a function and returns a value.

```js id="b2y4hj"
function check(num) {
  if (num < 0) return "Negative";
  return "Positive";
}
```

---

### 🔹 `throw`

Used to create custom errors.

```js id="d8k1az"
function withdraw(amount) {
  if (amount > 1000) {
    throw new Error("Limit exceeded");
  }
}
```

---

## 🧾 Summary Table

| Concept    | Purpose               |
| ---------- | --------------------- |
| if / else  | Conditional branching |
| switch     | Multi-case conditions |
| for        | Fixed loops           |
| while      | Condition-based loops |
| do...while | Run at least once     |
| for...in   | Object keys           |
| for...of   | Iterable values       |
| break      | Stop execution        |
| continue   | Skip iteration        |
| return     | Exit function         |
| throw      | Raise errors          |

---

## 🚀 When to Use

* **if / else** → general conditions
* **switch** → fixed value comparisons
* **for** → known iterations
* **while** → unknown iterations
* **for...of** → arrays/strings
* **for...in** → objects
* **break/continue** → control loop flow
* **throw** → error handling

---
