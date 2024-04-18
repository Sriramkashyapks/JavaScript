// destructing assignments => for objects and arrays

// destructing assignments is used to assign values to variables


// arrays

//eg1
const names = ["Thatcher", "Jennifer", "Ghost", "IQ"]; // array of strings
const [name1, name2, name3, name4] = names; // destructing assignments

console.log(name1); // Thatcher
console.log(name2); // Jennifer

//eg2
let nos = [1,2,3,4];
let [nos1, nos2, nos3, nos4] = nos;

console.log(nos3); // 3
console.log(nos4); // 4



// objects

//eg1
const people = { // object
    pName : "YJ",
    age: 22,
    designation: "cloud developer",
}

const {pName, age, designation} = people; // destructing assignments

console.log(pName); // YJ
console.log(designation);  // cloud developer

//eg2
const fruits = {
    person1: "apple",
    person2: "banana",
    person3: "mango",
}

const {p1, person2, person3} = fruits;

console.log(person2); // banana
console.log(p1); // undefined because p1 is not defined in the object fruits