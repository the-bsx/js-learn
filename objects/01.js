
// object is just a collection of key value pair

//* object constructor syntax
// const user = new Object();
// console.log(typeof user) // object

//* object literal syntax
// const user = {};
// console.log(typeof user) // object


// we can add delete and modify the object properties
 let user = {
    name: "Bishal",
    country: "Np"
 }

//  console.log(Object.entries(user)) // [ [ 'name', 'Bishal' ], [ 'country', 'Np' ] ]
// console.log(Object.keys(user)) //  [ 'name', 'country' ]
// console.log(Object.values(user)) //  [ 'Bishal', 'Np' ]

 //* we can add properties easily like this
 user.address = "ktm";
//  console.log(user);


 //* to delete the object properties
 delete user.country;
//  console.log(user)


 // even if we define object using const keyword we can still modify the
 //  properites  and values of that object

  const userOne = {
    name: "Bishal",
    country: "Np"
 }
//  console.log(userOne)
 userOne.name = "Bhusal";
 userOne.address = "ktm";

//  console.log(userOne)

 // but we cannot do like this
//  userOne = { name : "new name"} //TypeError: Assignment to constant variable.

 // also if we have to make object immutable then we can use object.freeze();
Object.freeze(userOne);
userOne.name = "Bishal"; // this lin
// console.log(userOne)    //{ name: 'Bhusal', country: 'Np', address: 'ktm' } 



const name = new Array();
// console.log(typeof name) // object

const date = new Date();
// console.log(date)
// console.log(typeof date)// object

function display(name) {
    console.log(name);
}


display("Bishal");
// console.log(typeof display) // function






 //! assignments

//!1. Write the code, one line for each action:

// Create an empty object student.
const student = {};
// console.log(student);

// Add the property name with the value John.
student.name = "John";
// console.log(student);

// Add the property surname with the value Smith.
student.surname = "Smith"
// console.log(student);

// Change the value of the name to Pete.
student.name = "pete";
// console.log(student);

// Remove the property name from the object.
delete student.name;

// console.log(student);


//!2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
   for(let key in obj) {
      return false
   }
   return true;
}

const objdetails = {};
console.log(isEmpty(objdetails)); // true

objdetails.name = "Ram";
console.log(isEmpty(objdetails)); // false



//!3. We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// answer:

let sum = 0;
function sumSalary(obj) {
   for(let key in obj) {
      sum += obj[key];
   }
   return sum;
}

console.log(sumSalary(salaries))


//! 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
function multiplyNumeric(obj) {
   for(let key in obj) {
      if(typeof obj[key] == 'number') {
         obj[key] *= 2;
      }
   }
}
multiplyNumeric(menu)
console.log(menu)