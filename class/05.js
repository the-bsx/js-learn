// inheritance in js
class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, subject){
        super(username)
        this.email = email;
        this.subject = subject;
    }
    display(){
        console.log(`Name:${this.username}, Email: ${this.email}, Subject: ${this.subject}`)
    }
}

const mathTeacher = new Teacher("example", "example@math.com", "maths");
mathTeacher.display();



//! behind the scence 
// function User(username){
//     this.username = username;
// }

// function Teacher(username, email, subject){
//     User.call(this, username);
//     this.email = email;
//     this.subject = subject;
// }

// Teacher.prototype.display = function(){
//     console.log(`Name:${this.username}, Email: ${this.email}, Subject: ${this.subject}`)
// }


// const mathTeacher = new Teacher("example", "example@math.com", "maths");
// mathTeacher.display();