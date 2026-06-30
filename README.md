# JavaScript Cheatsheet — from `js-learn` repo

A revision-ready summary of everything in your repo, organized by topic. Gaps/unclear spots are flagged at the end of each section.

---

## 1. Memory: Stack vs Heap (`basics/`)

- **Primitives** (string, number, boolean, etc.) live on the **stack**. Assigning one variable to another copies the value — they're independent afterward.
  ```js
  let name = "Bishal";
  let anotherName = name;
  anotherName = "Bhusal"; // name is still "Bishal"
  ```
- **Non-primitives** (objects, arrays, functions) live on the **heap**, and variables hold a **reference** to them. Assigning copies the reference, not the data — both variables point to the same object.
  ```js
  const user = { email: "bishal@example.com" };
  const userTwo = user;
  userTwo.email = "bhusal@example.com"; // user.email also changes
  ```

---

## 2. Execution Context & Hoisting (`execution/`)

JS runs in two phases per execution context:
1. **Memory creation phase**: scans the script, hoists `var`/function declarations, lets `let`/`const` sit in the **Temporal Dead Zone (TDZ)** until their line executes. Function declarations are hoisted *fully* (whole body), so they're callable before their line.
2. **Execution phase**: code runs top to bottom. Each function call pushes a **new execution context** onto the call stack (with its own memory + execution phases); it's popped off once the function returns.

```js
let val1 = 10, val2 = 5;
function addNum(a, b) { return a + b; } // hoisted in full
let res1 = addNum(val1, val2); // new context pushed, then popped, returns 15
```

**Note:** your notes only cover `let`/function hoisting — `var` hoisting (initialized to `undefined` instead of TDZ) isn't written down yet. Worth adding since it's the classic interview gotcha.

---

## 3. Functions (`functions/`)

**IIFE (Immediately Invoked Function Expression)** — a function defined and called at once, used to create an isolated scope:
```js
(() => {
  console.log("hello");
})();
```

**Gap:** this folder only has the IIFE example. Closures, default/rest params, `arguments` object, arrow function `this` binding, and currying aren't in your notes yet — these are core topics worth filling in.

---

## 4. `this`, `call`, `bind` (`class/02.js`, `class/03.js`, `class/bind.html`)

- **`call`**: invokes a function with an explicit `this`.
  ```js
  function SetUserName(username) { this.username = username; }
  function createUser(username, email, password) {
    SetUserName.call(this, username); // borrows SetUserName's logic, runs with createUser's `this`
    this.email = email;
    this.password = password;
  }
  const user = new createUser("Bishal", "bishal@example.com", "abcd123");
  ```
- **`bind`**: returns a *new function* with `this` permanently locked — essential for event handlers in classes, since callbacks lose their `this` otherwise.
  ```js
  class React {
    constructor() {
      document.querySelector('button')
        .addEventListener('click', this.handleClick.bind(this));
    }
    handleClick() { console.log(this.server); }
  }
  ```
- You can extend **built-in prototypes** (e.g. `String.prototype`), but this is generally discouraged in real projects since it can clash with other code/libraries:
  ```js
  String.prototype.first = function () {
    console.log(`first letter of ${this} is ${this[0]}`);
  };
  "xyz".first(); // works even on string literals, since they're auto-boxed
  ```

---

## 5. Classes (`class/`)

Classes are syntactic sugar over prototypes — both forms below do the same thing.

**Old prototype style:**
```js
function User(name, country) { this.name = name; this.country = country; }
User.prototype.print = function () { console.log(`${this.name} ${this.country}`); };
```

**Class style:**
```js
class User {
  constructor(username, email, password) {
    this.username = username; this.email = email; this.password = password;
  }
  encryptPassword() { return `${this.password}abc###`; }
}
```

**Inheritance** — `extends` + `super()`:
```js
class Teacher extends User {
  constructor(username, email, subject) {
    super(username); // must call before using `this`
    this.email = email;
    this.subject = subject;
  }
}
```
Behind the scenes, this is equivalent to `User.call(this, username)` plus copying methods onto `Teacher.prototype`.

**Static methods** — belong to the class itself, not instances:
```js
class User {
  static createId() { return "123"; }
}
User.createId(); // not user.createId() conceptually, though JS allows calling via instance too
```

**Getters/setters** — intercept property access; the convention is to back them with an underscore-prefixed field to avoid infinite recursion:
```js
class User {
  get name() { return this._name; }
  set name(value) { this._name = value; }
}
```

---

## 6. Objects (`objects/`)

**Creating & modifying:**
```js
const user = { name: "Bishal", country: "Np" };
Object.entries(user); // [['name','Bishal'], ['country','Np']]
Object.keys(user);    // ['name', 'country']
Object.values(user);  // ['Bishal', 'Np']
delete user.country;
```

**Immutability:**
```js
Object.freeze(userOne); // further mutation attempts are silently ignored (or throw in strict mode)
```

**Copying objects — shallow vs deep:**
- Manual loop or `Object.assign({}, user)` or spread `{...user}` → all **shallow** copies (nested objects still shared by reference).
- `structuredClone(obj)` → **deep clone**, including nested objects. **Does not support functions** — cloning an object with a method throws `DataCloneError`.
  > Your file `objects/02.js` has `console.log(fnclone)` after cloning an object with a `greet()` method — this would actually throw, not log. Worth correcting the comment/expectation there.

**`this` and method chaining:**
```js
let ladder = {
  step: 0,
  up() { this.step++; return this; }, // returning `this` enables chaining
  down() { this.step--; return this; }
};
ladder.up().up().down().count();
```

**Constructors / `new`:**
```js
function User(name) { this.name = name; this.isAdmin = false; }
let user = new User("Bishal");
```
Note: if a constructor explicitly `return`s an **object**, that object is returned instead of the newly created `this` — that's why two separate constructors returning the same external `obj` produce `a == b` as `true` in your `objects/04.js` example.

**Symbols** — guaranteed-unique keys, used to avoid property name collisions:
```js
let id = Symbol("id");
user[id] = 1; // hidden-ish property, won't show in for...in or Object.keys
```

---

## 7. Arrays (`arrays/`)

**Stack/queue-style end methods:**
| Method | Effect | End |
|---|---|---|
| `push(x)` | append | end |
| `pop()` | remove & return last | end |
| `unshift(x)` | prepend | start |
| `shift()` | remove & return first | start |

**Accessing elements:**
```js
arr.at(-1); // last element — preferred over arr[arr.length - 1]
```

**Quirk:** array `.length` is not literally "item count" — it's the highest numeric index + 1.
```js
let len = [];
len[455] = 1;
len.length; // 456
```
Also: `arr.length = n` truncates the array (or pads with empty slots if `n` is larger).

**`splice` vs `slice`:**
- `splice(start, deleteCount, ...items)` — **mutates** the array; can remove, insert, or replace in place.
- `slice(start, end)` — **non-mutating**, returns a new sub-array (`end` not included).

**Iteration/search methods:**
```js
arr.forEach((item, index, array) => {});
arr.indexOf(x); arr.lastIndexOf(x); arr.includes(x);
arr.find(fn);       // first matching element
arr.findIndex(fn);  // index of first match
arr.filter(fn);     // all matching elements as new array
arr.map(fn);        // transforms each element into a new array
arr.reduce((acc, item) => acc + item, initialValue); // single accumulated value
```

**String <-> array:**
```js
"ram, sita".split(", "); // → array
arr.join(", ");          // → string
```

**Gap:** `reduceRight` is mentioned in a comment but never actually demonstrated — worth writing a quick example since it's the mirror of `reduce` (right-to-left).

---

## 8. Asynchronous JS (`async/`)

**Event loop basics** — `setTimeout` callbacks run *after* all synchronous code, even with a `0`ms delay, because they go through the macrotask queue:
```js
console.log("first");
setTimeout(() => console.log("second"), 0);
console.log("third");
// Output: first, third, second
```

**Promises** — three states: `pending`, `fulfilled`, `rejected`.
```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ username: "Example" }), 1000);
});
p.then(user => console.log(user));
```

**Chaining `.then()` / `.catch()` / `.finally()`:**
```js
promiseFour
  .then(user => { console.log(user); return user.username; })
  .then(userName => console.log(userName))
  .catch(error => console.log(error))
  .finally(() => console.log("settled either way"));
```
Important: once a `.catch()` handles a rejection, the chain is "recovered" and subsequent `.then()`s run normally with whatever the catch handler returns.

**`async`/`await`** — syntactic sugar over promises, using `try/catch` for error handling:
```js
async function consume() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
```
Note: an `async function` always returns a **Promise**, even if you `return 42` directly — that's why `console.log(getValue())` logs a `Promise {<pending>}`/`Promise {42}`, not `42` itself.

**Fetch (modern) vs XHR (legacy):**
```js
fetch(url).then(r => r.json()).then(data => console.log(data)).catch(e => console.log(e));
```
Your `ajax.html` file demonstrates the older `XMLHttpRequest` API for comparison — useful to recognize in legacy code, but `fetch`/`async-await` is the modern default.

**Gap / unclear spot:** `async/03.js` has several commented-out microtask-ordering experiments (`Promise.resolve().then()` chains) without notes on *why* the output order is what it is. This is a great topic (microtask queue runs before macrotask queue, and before each `.then()` defers execution) but isn't written up yet — worth a dedicated note since it's a common interview trap.

---

## 9. Strings (`strings/`)

Currently the thinnest section — only covers:
```js
str.indexOf("id");      // first match index, -1 if absent
str.lastIndexOf("id");  // search from the end
str.includes("id");     // boolean
str.slice(0, 4);        // substring, end NOT included, non-mutating
```

**Gap:** no notes yet on `substring()` vs `slice()` differences (substring doesn't accept negative indices), `replace`/`replaceAll`, `trim`, `padStart`/`padEnd`, template literals, or string immutability. Since this folder only has one short file, it's the section most worth expanding next.

---

## Summary: What to revise next

1. **`var` hoisting** behavior (vs `let`/`const` TDZ) — execution context notes are otherwise solid.
2. **Closures** and default/rest parameters — functions folder is very thin (1 file).
3. **Microtask vs macrotask queue** ordering — you've started exploring this in `async/03.js` but haven't written conclusions down.
4. **String methods** beyond `indexOf`/`slice` — least developed section.
5. Fix the comment in `objects/02.js` that implies `structuredClone` succeeds on an object with a method — it actually throws `DataCloneError`.