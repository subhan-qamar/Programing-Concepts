# 🛠 Built-in Methods & Functional Programming (JavaScript)

---

# 🔹 Array Methods

## 1. map()

Transforms each element and returns a new array.

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]
```

---

## 2. filter()

Returns elements that satisfy a condition.

```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
// [2, 4]
```

---

## 3. reduce()

Reduces array to a single value.

```js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
// 6
```

---

## 4. find()

Returns first matching element.

```js
const users = [{id:1}, {id:2}];
const user = users.find(u => u.id === 2);
// {id:2}
```

---

## 5. some() / every()

```js
const nums = [1, 2, 3];
nums.some(n => n > 2);   // true
nums.every(n => n > 0);  // true
```

---

## 6. flat() / flatMap()

```js
const arr = [1, [2, 3]];
arr.flat(); // [1, 2, 3]

const nums = [1, 2];
nums.flatMap(n => [n, n * 2]);
// [1, 2, 2, 4]
```

---

## 7. sort()

Sorts array (mutates original).

```js
const nums = [3, 1, 2];
nums.sort((a, b) => a - b);
// [1, 2, 3]
```

---

# 🔹 String Methods

```js
const str = "hello world";

str.toUpperCase();
str.includes("world");
str.slice(0, 5);
str.split(" ");
```

---

# 🔹 Object Methods

## Object.keys / values / entries

```js
const obj = {a:1, b:2};

Object.keys(obj);    // ["a", "b"]
Object.values(obj);  // [1, 2]
Object.entries(obj); // [["a",1], ["b",2]]
```

---

## Object.assign()

```js
const a = {x:1};
const b = {y:2};

const merged = Object.assign({}, a, b);
// {x:1, y:2}
```

---

## Object.freeze() / Object.seal()

```js
const obj = {a:1};

Object.freeze(obj); // cannot modify
Object.seal(obj);   // can modify, cannot add/remove
```

---

# 🔥 Functional Programming Concepts

---

## 1. Immutability

Do not modify original data.

```js
const arr = [1, 2];
const newArr = [...arr, 3];
```

---

## 2. Currying

Function returning another function.

```js
const add = a => b => a + b;

add(2)(3); // 5
```

---

## 3. Composition

Combine functions.

```js
const double = x => x * 2;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));

compose(square, double)(2); // (2*2)^2 = 16
```

---

## 4. Memoization

Cache results for performance.

```js
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const slowSquare = n => {
  console.log("computing...");
  return n * n;
};

const fastSquare = memoize(slowSquare);

fastSquare(5); // computes
fastSquare(5); // cached
```

---

# 🧠 Key Takeaways

* map/filter/reduce = core of functional JS
* avoid mutation when possible
* functions should be reusable and predictable
* memoization improves performance
* composition builds complex logic from small pieces

---

# 🚀 Practice Tip

Try combining everything:

```js
const result = users
  .filter(u => u.active)
  .map(u => u.age)
  .reduce((acc, age) => acc + age, 0);
```

👉 This is how real-world JS is written.
