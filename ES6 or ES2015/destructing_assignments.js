// for arrays 

const numbers = [1, 2, 3]; // initializing the array
const [a, b, c] =  numbers; //destructing assignments for arrays

// for arrays => [..] 

// printing the array
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


// for objects
const person = {       //initializing the objects
name: 'Thatcher',
age: 21,
gender: "M"
};

//destruction assignment
const {name, age, gender} = person;    //const [name, age, gender] = objects; -> wrong

// for objects = {..}

console.log(name); // Thatcher
console.log(age); // 21 
console.log(gender); // M


