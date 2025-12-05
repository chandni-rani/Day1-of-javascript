//Check if anumber is greater than unother number

const { use } = require("react");

let a = 10;
let b = 5;

if (a > b) {
    console.log("A is greater than B");
} else {
    console.log("B is greater than a");   
}

//Check if a string is equal to another string

let username = "Chandni";
let unotherUsername = "Chanda";

if (username == unotherUsername) {
    console.log("Usernames match");

} else {
    console.log("Usernames do not match");
}

//Check if a variable is a number or not

let value = 42;

if (typeof value == 'number') {
    console.log("Yes, Value is a number"); 
} else {
    console.log("No, Value is not a number");
}