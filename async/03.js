// asyn assignments
// console.log("1");


// Promise.resolve().then(() => console.log("2"));

// console.log("3");



//*--------
// Promise.resolve(1)
//   .then((val) => {
//     console.log(val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log(val);
//     // no return here
//   })
//   .then((val) => {
//     console.log(val);
//   });

  //*3---------------------
  Promise.reject("error A")
  .then((val) => {
    console.log("then 1:", val);
  })
  .catch((err) => {
    console.log("caught:", err);
    return "recovered";
  })
  .then((val) => {
    console.log("then 2:", val);
  });

  //* 4-------------
  async function getValue() {
  return 42;
}

const result = getValue();
console.log(result);