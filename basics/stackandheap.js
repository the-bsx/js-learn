//* how memory works in javascript

// stack ( all primitive data type uses stack memory)
 // when stack memory is defined for variables then the copy of orignal data is given

 let name = "Bishal";
 console.log(name);

 // anotherName is getting the copy of name so any changes done in anotherName won't affect the name
 let anotherName = name;
 console.log(anotherName);

 anotherName = "Bhusal";
 console.log(anotherName)


// heap (all  non primitive type uses heap memory)
// when heap memory is defined for given variables then the reference of original data is given

const user = {
    name: "Bishal",
    email:"bishal@example.com"
}

console.log(user["email"]);

// here userTwo is also refrencing to the same memory location so any changes done in userTwo will also change the
// value of user
const userTwo = user;
userTwo.email = "bhusal@example.com";

console.log(user["email"])