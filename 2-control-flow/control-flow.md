**2. 🔁 Control Flow**

**Conditional Statements**

if / else

if(true) {
  <!-- // code -->
} else if (condition) {
  <!-- // code -->
} else {
  <!-- // code -->
}

switch

Switch is a control statement that allows you to execute different code blocks based on the value(Type Strict) of an expression.
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}

**Loops**

<!-- for -->
for (let i = 0; i < 5; i++) {
  <!-- // code -->
}
<!-- // while -->
while (condition) {
  <!-- // code -->
}
<!-- // do-while -->
do {
  <!-- // code -->
} while (condition);
<!-- // for...in -->
for(val in object) {
  <!-- // code -->
}
<!-- // for...of -->
for (val of iterable) {
  <!-- // code -->
}
**Control Statements**

<!-- // break -->
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // exits the loop when i is 3
}
// continue
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // skip the current iteration of a loop and move immediately to the next one
  <!-- // code -->
}
// return
for (let i = 0; i < 5; i++) {
  if (i === 3) return; // exits the function when i is 3
  <!-- // code -->
}
// throw
for (let i = 0; i < 5; i++) {
  if (i === 3) throw new Error("An error occurred"); // throws an error when i is 3
  <!-- // code -->
}