
String.prototype.first = function(){
    console.log(`first letter of ${this} is ${this[0]} `);
}

let name = new String("Bishal")
name.first(); // first letter of Bishal is B 

 //* first method will work even if we defined string like below
let name2 = "xyz";
name2.first(); // first letter of xyz is x
