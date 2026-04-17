# 🧱 Data Structures (Core Language Level)

## 📦 Arrays

Arrays are ordered collections of elements (can store mixed data types).

```js
let arr = [1, 2, 3, "hello"];
```

### 🔹 Indexing

* Access elements using zero-based index:

```js
arr[0]; // 1
arr[3]; // "hello"
```

### 🔹 Iteration

* Loop through arrays:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Modern way
arr.forEach(item => console.log(item));
```

### 🔹 Sparse Arrays

Arrays with missing (empty) indexes:

```js
let sparse = [];
sparse[5] = "hi";

console.log(sparse.length); // 6
console.log(sparse[0]); // undefined
```

⚠️ These can lead to unexpected behavior in loops.

---

## 🔤 Strings

Strings represent text.

```js
let str = "Hello World";
```

* Immutable (cannot be changed directly)

```js
str[0] = "h"; // ❌ no effect
```

* Common methods:

```js
str.length;
str.toUpperCase();
str.slice(0, 5);
```

---

## 🧩 Objects

Objects store data in key-value pairs.

```js
let obj = {
  name: "Ali",
  age: 22
};
```

### 🔹 Key-Value Pairs

* Keys are strings (or Symbols)
* Values can be anything

```js
obj.name; // "Ali"
obj["age"]; // 22
```

---

## ⚙️ Property Descriptors

Control how object properties behave.

```js
Object.defineProperty(obj, "id", {
  value: 101,
  writable: false,
  enumerable: true,
  configurable: false
});
```

### Key attributes:

* **writable** → can value change?
* **enumerable** → shows in loops?
* **configurable** → can be deleted/modified?

---

## 🗺️ Maps

A Map is a collection of keyed data (any type of key allowed).

```js
let map = new Map();

map.set("name", "Ali");
map.set(1, "number key");

map.get("name"); // "Ali"
```

### Advantages:

* Keys can be objects, functions, etc.
* Maintains insertion order

---

## 🧮 Sets

A Set stores unique values only.

```js
let set = new Set([1, 2, 2, 3]);

console.log(set); // {1, 2, 3}
```

### Useful methods:

```js
set.add(4);
set.has(2); // true
set.delete(1);
```

---

## ♻️ WeakMap / WeakSet

### 🔹 WeakMap

* Keys must be objects
* Does not prevent garbage collection

```js
let wm = new WeakMap();
let objKey = {};

wm.set(objKey, "data");
```

### 🔹 WeakSet

* Stores objects only
* Weakly held (auto garbage collected)

```js
let ws = new WeakSet();
let obj1 = {};

ws.add(obj1);
```

### 🧠 Key Idea:

* Used for memory-efficient data handling
* Not iterable (no loops)

---

## 🧾 Summary Table

| Structure | Ordered | Key Type       | Unique | Iterable |
| --------- | ------- | -------------- | ------ | -------- |
| Array     | ✅       | Index (number) | ❌      | ✅        |
| Object    | ❌       | String/Symbol  | ❌      | ✅        |
| Map       | ✅       | Any            | ❌      | ✅        |
| Set       | ✅       | Value          | ✅      | ✅        |
| WeakMap   | ❌       | Object only    | ❌      | ❌        |
| WeakSet   | ❌       | Object only    | ✅      | ❌        |

---

## 🚀 When to Use What?

* **Array** → ordered lists
* **Object** → simple structured data
* **Map** → dynamic keys, better performance for frequent changes
* **Set** → unique collections
* **WeakMap/WeakSet** → memory-sensitive object tracking

---
