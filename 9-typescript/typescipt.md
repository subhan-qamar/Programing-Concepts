# 🔷 TypeScript (Type System Mastery)

TypeScript adds a **powerful type system** on top of JavaScript to improve safety, readability, and scalability.

---

## 🔹 Basic Types

```ts id="3s9k2d"
let age: number = 22;
let name: string = "Ali";
let isActive: boolean = true;
let data: any = "anything";
```

Other common types:

* `null`, `undefined`
* `void`
* `never`

---

## 🧠 Type Inference

TypeScript automatically detects types.

```ts id="7n4k5s"
let x = 10; // inferred as number
```

---

## 🧩 Interfaces

Define structure of objects.

```ts id="2j8d1l"
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Ali",
  age: 22
};
```

---

## 🏷️ Type Aliases

Create custom reusable types.

```ts id="6f3a8m"
type ID = string | number;

let userId: ID = 123;
```

---

## 🔀 Union Types

Allow multiple types.

```ts id="p9c4r1"
let value: string | number;
value = "hello";
value = 10;
```

---

## 🔗 Intersection Types

Combine multiple types.

```ts id="w3z8ka"
type A = { a: number };
type B = { b: string };

type C = A & B;
```

---

## 🔤 Literal Types

Specific exact values.

```ts id="x2l7qp"
let direction: "left" | "right";
```

---

## 🔢 Enums

Named constants.

```ts id="k8z1vn"
enum Role {
  Admin,
  User
}
```

---

## 🔁 Generics

Reusable components with types.

```ts id="q5y2cm"
function identity<T>(value: T): T {
  return value;
}
```

---

## 🧰 Utility Types

### 🔹 Partial

Makes all properties optional

```ts id="y6n3ot"
type User = { name: string; age: number };
type PartialUser = Partial<User>;
```

---

### 🔹 Required

Makes all properties required

```ts id="t1v9al"
type RequiredUser = Required<User>;
```

---

### 🔹 Pick

Select specific properties

```ts id="n4c2us"
type UserName = Pick<User, "name">;
```

---

### 🔹 Omit

Exclude properties

```ts id="m7r5qx"
type UserWithoutAge = Omit<User, "age">;
```

---

### 🔹 Record

Create object type with keys

```ts id="b3f6hk"
type Roles = Record<string, string>;
```

---

## 🧠 Advanced Types

### 🔹 Conditional Types

```ts id="u8x4pm"
type IsString<T> = T extends string ? true : false;
```

---

### 🔹 Mapped Types

```ts id="c5v2zo"
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

### 🔹 `infer` Keyword

```ts id="g9y1ld"
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

---

## 🎯 Type Narrowing

Refining types at runtime.

```ts id="z3m8xr"
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

## 🛡️ Type Guards

Ensure safe type usage.

```ts id="f2q7vb"
function isString(value: any): value is string {
  return typeof value === "string";
}
```

---

## 🔄 Declaration Merging

TypeScript merges declarations with same name.

```ts id="d6k1sj"
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: { name: string; age: number }
```

---

## 🧾 Summary Table

| Concept       | Key Idea         |
| ------------- | ---------------- |
| Basic Types   | Core primitives  |
| Interfaces    | Object structure |
| Type Alias    | Custom types     |
| Union         | Multiple types   |
| Intersection  | Combined types   |
| Generics      | Reusable typing  |
| Utility Types | Built-in helpers |
| Conditional   | If-else types    |
| Mapped        | Transform types  |
| Narrowing     | Runtime checks   |

---

## 🚀 When to Use

* **Interfaces** → object contracts
* **Generics** → reusable logic
* **Union Types** → flexible inputs
* **Utility Types** → cleaner code
* **Type Guards** → safe runtime checks

---
