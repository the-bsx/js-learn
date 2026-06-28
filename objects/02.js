//* Object references and copying




//* cloning the object manually
const user = {
    name: "Bishal",
    country: "Np"
}
const clone = {};

// here clone objects clone the user but they are not refrencing the same object so 
// modifying the clone doesn't affect the user 

for(let key in user) {
    clone[key] = user[key];
    // console.log(user[key])
}

clone.name = "sita"
// console.log(clone)
// console.log(user)


//* using object.assign()
let clone1 = Object.assign({}, user);
// console.log(clone1)


//* using the spread syntax 
const clone2 = {...user};
// console.log(clone2)


//! for nested loop object we used structuredClone method so that inner object will also be cloned not just sharing the reference
//! but structuredClone doesn't support the objects with functions

let person = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let nestedClone = structuredClone(person);
// console.log(nestedClone);

nestedClone.sizes.width = 60;
// console.log(person)

// console.log(nestedClone)


// object with functions
const fnobj = {
    name: "example",
    greet() {
        return `hi ${this.name}`;
    }
}

// DOMException [DataCloneError]: greet() {
//         return `hi ${this.name}`;
//     } could not be cloned.
const fnclone = structuredClone(fnobj);
console.log(fnclone)
