// getter and setter in js

class User{
    constructor(name, email){
        this.name = name;
        this.email = email
    }

    get name(){
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email(){
        return `${this._email}#123`
    }
    set email(value){
        this._email = value ;
    }
}

const user = new User("Bishal", "bishal@example.com");
console.log(user.name)
console.log(user.email)
