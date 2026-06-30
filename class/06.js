//* static properties

class User{
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

   static  createId(){
        return `123`;
    }
}

const user =  new User("Bishal");
console.log(user.createId())
console.log(user.createId())

