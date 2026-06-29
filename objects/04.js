//* Constructor, operator "new"

function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Bishal");
console.log(user.name)


let obj = {}
function A() {
    return obj;
}
function B() {
    return obj;
}

let a= new A();
let b= new B();
console.log(a)
console.log(b)
console.log(a == b);