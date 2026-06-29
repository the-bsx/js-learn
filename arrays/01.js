//* declaration of array
// let arr = new Array();
// let arr1 = [];

let alphabets = ['a', 'e', 'i', 'o', 'u']

// console.log(alphabets[1]) // e

// console.log(alphabets) // [ 'a', 'e', 'i', 'o', 'u' ]


//* lenght of array
// console.log(alphabets.length) // 5


//* accesing the last element of array
// console.log(alphabets[-1]) // undefined
// console.log(alphabets[alphabets.length -1]) // u      (lengty method)
 
//* or we can use array.at() to acces the element of nth position (recommended)
// console.log(alphabets.at(-1)) // u



 //! methods in array

 //* push and shift are example of queue

 //* pop and pop are example of stack


  //! pop and push works with end of array

 //* pop -------- extract the last element of array and returns it;
 let arr= [1 , 2 ,3 , 4, 5];
console.log(arr.pop()) // 5
console.log(arr) // [ 1, 2, 3, 4 ]


//* push -------- appends the elements to the end of an array
// arr[arr.length] = 6 // same as arr.push(6)
arr.push(6);
console.log(arr) // [ 1, 2, 3, 4, 6 ]



//! shift and unshift works at beginning of array

//* shift ----------- extract the first element and returns it
console.log(arr.shift()) // 1
console.log(arr) // [ 2, 3, 4, 6 ]

//* unshift ---------- add the element to beginning of an array
arr.unshift(0);
console.log(arr) // [ 0, 2, 3, 4, 6 ]