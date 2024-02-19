// spread operator is used to expand the elements of an array or object

//Spread operator for arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(numbers); // [1, 2, 3]
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6] -> arrays are expanded

//Spread operator for objects
const person = {
    name: 'Thatcher',
    age: 21,
};
const morePerson = {
    ...person,
    birthYear: 1999,
};
console.log(person); // { name: 'Thatcher', age: 21 }
console.log(morePerson); // { name: 'Thatcher', age: 21, birthYear: 1999 } -> objects are expanded