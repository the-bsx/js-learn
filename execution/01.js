// execution context in js

    let val1 = 10;
    let val2 = 5;
    function addNum(num1, num2) {
        let total = num1 + num2;
        return total
    }
    let res1 = addNum(val1, val2);
    let res2 = addNum(10, 2)


    // how everytthing works in js
// before running a single line of code js scans the whole script  and let the declartion occupes the spaces in memory but stays in temporal dead zone(except var)
// and function declaration (i.e addNum in our case) is hoisted in full - the entire function body is ready to call
// now value of val1 = 10 and val2 = 5 assinged and leaves the tdz 
//in line 9 , when res1 = addNum(...), js looks for the addNum, find the hoisted functions, call it with parameters 10 and 5 
// this pushes the new execution context onto the stack
// and again value of parameter is assigned in memory creation phase and total is in tdz 
// in execution phase, value of total will be calculated and return total will return  sends the value back to caller. and this execution context
// is now popped off the stack
// addNum is gone from stack and value returned is assigned to res1 = 15 which leaves the tdz
// similar happens for res2 with creation of new fresh execution context with memroy phase and execution phase and returned value is assigned to res2

// in this way javascrit works internally