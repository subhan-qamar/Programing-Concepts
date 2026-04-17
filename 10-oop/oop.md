# 🏗 Object-Oriented Programming (OOP)

OOP is a programming paradigm based on **objects and classes** that helps organize code into reusable and scalable structures.

---

## 🧩 Classes & Objects

### 🔹 Class

Blueprint for creating objects.

```js id="h1k3js"
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

### 🔹 Object

Instance of a class.

```js id="a9f2kd"
const user = new Person("Ali");
```

---

## 🏗 Constructors

Special method used to initialize objects.

```js id="p4d7lm"
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}
```

✔️ Runs automatically when object is created

---

## 🔒 Encapsulation

Hiding internal details and exposing only necessary parts.

```js id="z7x3pw"
class Bank {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

## 🎭 Abstraction

Hiding complex logic and showing only essential features.

```js id="k8w2rt"
class Machine {
  start() {
    console.log("Machine started");
  }
}
```

✔️ User doesn't need to know internal workings

---

## 🧬 Inheritance

Child class inherits properties from parent class.

```js id="y3n6vd"
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {}
```

---

## 🎨 Polymorphism

Same method behaves differently.

### 🔹 Runtime Polymorphism (Method Overriding)

```js id="c2m8qx"
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

---

### 🔹 Compile-time Polymorphism

Not native in JavaScript, but possible in TypeScript (method overloading).

```ts id="v9d4as"
function greet(name: string): string;
function greet(age: number): string;

function greet(value: any): string {
  return "Hello " + value;
}
```

---

## 🔁 Method Overriding

Child class redefines parent method.

```js id="t6h2jk"
class Parent {
  show() {
    console.log("Parent");
  }
}

class Child extends Parent {
  show() {
    console.log("Child");
  }
}
```

---

## ➕ Method Overloading (TypeScript Concept)

Multiple function signatures.

```ts id="u8c1pz"
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
  return a + b;
}
```

---

## 🔐 Access Modifiers (TypeScript)

### 🔹 `public`

Accessible everywhere (default)

### 🔹 `private`

Accessible only inside class

### 🔹 `protected`

Accessible in class and subclasses

```ts id="m3p9ld"
class User {
  public name: string;
  private password: string;
  protected age: number;

  constructor(name: string, password: string, age: number) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
}
```

---

## ⚡ Static Methods & Properties

Belong to class, not instances.

```js id="x5v8nm"
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

MathUtils.add(2, 3);
```

---

## ⚖️ Composition vs Inheritance

### 🔹 Inheritance

"Is-a" relationship

```js id="d2q7fj"
class Animal {}
class Dog extends Animal {}
```

---

### 🔹 Composition

"Has-a" relationship

```js id="r4n6sx"
class Engine {
  start() {}
}

class Car {
  constructor() {
    this.engine = new Engine();
  }
}
```

✔️ Composition is more flexible and preferred in many cases

---

## 🧾 Summary Table

| Concept          | Key Idea            |
| ---------------- | ------------------- |
| Class            | Blueprint           |
| Object           | Instance            |
| Constructor      | Initializes object  |
| Encapsulation    | Data hiding         |
| Abstraction      | Hide complexity     |
| Inheritance      | Reuse code          |
| Polymorphism     | Multiple behavior   |
| Overriding       | Redefine method     |
| Overloading      | Multiple signatures |
| Access Modifiers | Control access      |
| Static           | Class-level methods |
| Composition      | Combine objects     |

---

## 🚀 When to Use

* **Classes** → structured code
* **Encapsulation** → protect data
* **Inheritance** → reuse logic
* **Composition** → flexible design
* **Polymorphism** → adaptable behavior

---
