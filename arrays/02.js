//! loops with arrays

let arr = [ 1, 2, 3, 4 ,5];


//* for loop
for(let i = 0; i  <arr.length; i++) {
    // console.log(arr[i]) // 1  2  3  4  5
}


//* for...of loop
for(let item of arr) {
    // console.log(item) // output same as of for loop
}

//! trick about length property of array
//* so length is not the actual count of item in array but the but the gretest numeric index plus one

let len = []
len[455] = 1;
// console.log(len.length) // output: 456


//! simplest way to clear array is array.length = 0 
let arr1 = [1 ,3 , 5 ,7 , 9];
arr1.length = 2;
console.log(arr1) // [ 1, 3 ]
arr1.length = 5;
console.log(arr1) // [ 1, 3, <3 empty items> ]