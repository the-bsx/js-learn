//* call and this in js

function SetUserName(username){
    this.username = username;
    // return this.username;
}

function createUser(username, email, password) {
      SetUserName.call( this, username)
    this.email = email;
    this.password = password;

}

const user = new createUser("Bishal", "bishal@example.com", "abcd123")
console.log(user)