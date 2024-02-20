//porperty shorthand is a feature in ES6 that allows you to directly assign variables to object properties.
// it allows you to simplify the creation of object literals when the property name and variable name are the same

const name = 'sriram';
const designation = 'cloud engineer';

const employee = {name, designation};

console.log(employee.name); // sriram
console.log(employee.designation); // cloud engineer

// The above code is equivalent to the following code:
// const employee = {name: name, designation: designation};
//properties 'name' and 'age' are directly assigned values from the variables 'name' and 'age' respectively