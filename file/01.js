import fs from "fs";


//* synchronous way
fs.writeFileSync("./test.txt", "hello world");


//* async way
fs.writeFile("./test.txt","hello from async", function(err){
})


//* sync... reading the file
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result)


//* async.... reading the file
fs.readFile("./contact.txt", "utf-8", function(err, data){
    if(err){
        throw err
    }
    console.log(data)
})


