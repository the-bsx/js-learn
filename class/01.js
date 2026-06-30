// javascript and classes
// classes in js are just syntactical sugar of objects

function User(name, country) {
  this.name = name;
  this.country = country;
}

User.prototype.print = function () {
  console.log(`Name: ${this.name} and Country: ${this.country}`);
};

User.prototype.changeName = function (name) {
  this.name = name;
};

const userOne = new User("example", "Np");
userOne.print();
userOne.changeName("Bishal");
userOne.print();
