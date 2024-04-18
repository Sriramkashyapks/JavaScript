
// functions are a block of code that can be called by name and can be reused

// normal function

function greet(name) { // defining the function name
    console.log(`My name is ${name}`); // string interpolation
}

greet("Thatcher"); // calling the function
greet("Yashas");

// Arrow Function

//eg1
const greetings = (UName) => { // defining the function UName
    console.log(`My Name is ${UName}`);
}

greetings("Jennifer");
greetings("Sakshi")

//eg2
// Square function 

const sqaure = (value) => {
    let ans = value * value;
    console.log(`The square of ${value} is ` + ans );
}

sqaure(2);
sqaure(69);