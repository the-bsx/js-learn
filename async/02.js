//! promises

// a promises is one of following states
//1. pending
//2. fulfilled
//3. rejected

// creating promises
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task such as db calls, cryptography tasks, networks calls
  setTimeout(function () {
    console.log("async tasks complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promised Consumed");
});

// another way of creating promises
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise two complete");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise two consumed");
});

//* creating promises and passing the data
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise three ");
    resolve({ username: "Example", email: "example@example.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// handling the resolve and reject in promises
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Bishal", country: "Np" });
    }
    reject({ error: "error occured in promise four" });
  }, 4000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise in either resolved or rejected");
  });

//* promises with async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "random", country: "Au" });
    }
    reject({ error: "error occured in promise five" });
  }, 4000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


//* async await example
// async function getData() {
//     const url = "https://api.github.com/users/the-bsx"
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }

// getData()

    fetch("https://api.github.com/users/the-bsx")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("E: ", error)
    })
