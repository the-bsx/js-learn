//* symbol represents the unique identifier

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2)
console.log(id1.description)
console.log(id1.valueOf())


let user = {
    name: "example"
}

let id = Symbol("id");
user[id] = 1;
console.log(user)
console.log(user[id])