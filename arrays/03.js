//! arrays methods

//* splice
// array.splice can insert, remove and replace the elements

let arr = [1, 2, 3, 4];

arr.splice(1, 1, 0); // remove one  item  from 1st position and add the value 0 that place
// console.log(arr) // [ 1, 0, 3, 4 ]

let output = arr.splice(1, 2);
// console.log(res)  //[0, 3]
// console.log(arr)  // [ 1, 4 ]

//! add items without deleting using splice
arr.splice(2, 0, 5);
// console.log(arr)

//* slice

let arr1 = [1, 2, 3, 4];
// console.log(arr1.slice(0, 2));
// console.log(arr1)

//! to concat array with object  Symbol.isConcatSpreadable property is used
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

// console.log(arr1.concat(arrayLike))  // [ 1, 2, 3, 4, 'something', 'else' ]

//! iteration in array

//* foreach

let nums = [1, 2, 3, 4, 5, 1];

nums.forEach(function (item, index, array) {
  // console.log(`${item} at ${index} index  of array ${array}`)
});

//!  indexOf/lastIndexOf and includes

// console.log(nums.indexOf(2)); // 1
// console.log(nums.indexOf(6)); // -1  if element is not in array
// console.log(nums.includes(3)); // true
// console.log(nums.includes(6)); // false

// console.log(nums.lastIndexOf(4)) // 4

//! find and findIndex/findLastIndex
//* find method will return the first found element only
const users = [
  { id: 1, name: "example" },
  { id: 2, name: "Ram" },
  { id: 3, name: "sita" },
  { id: 4, name: "Ram" },
];

const result = users.find((user, index, array) => {
  return user.name == "Ram";
});
// console.log(result) // { id: 2, name: 'Ram' }

//! filter

//* filter returns the array of all matching elements
let res = users.filter((user, index, array) => {
  return user.name == "Ram";
});
// console.log(res) // [ { id: 2, name: 'Ram' }, { id: 4, name: 'Ram' } ]

// returns the user having id less than 3
res = users.filter((user, index, array) => {
  return user.id < 3;
});
// console.log(res) // [ { id: 1, name: 'example' }, { id: 2, name: 'Ram' } ]

//! transform an array

//* array.map
// ---- it is used to modify the each element of array
// example: multiply the each element of array by 2

let values = [0, 1, 2, 3, 4, 5];

let disp = values.map((item) => {
  return item * 2;
});
// console.log(values);
// console.log(disp); [ 0, 2, 4, 6, 8, 10 ]

//! split and join

let data = "ram, sita, gita, hari";

let names = data.split(", ");

// console.log(names); // [ 'ram', 'sita', 'gita', 'hari' ]
// console.log(data) // ram, sita, gita, hari

let joinname = names.join(", ");
console.log(joinname); // ram, sita, gita, hari



//! reduce and reduceright
//* used to calculate the single value based on array

let marks = [80, 70, 50, 60, 95];

let value = marks.reduce(function (acc, item, index, array) {
    return acc + item;
}, 0);

console.log(value)
