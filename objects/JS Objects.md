# JS Objects

# Object Literals:

- object literals are a way to create objects in javascript using key value pairs and curly braces
- they are a way to create objects in a more concise way
- and are a way to create objects without having to use the new keyword

```jsx
//object literals are a way to create objects in javascript using key value pairs and curly braces

const person = {
    name : 'sriram',
    designation : 'cloud engineer',
    yearsOfExperience : function(){ //function inside an object is called a method
        console.log("I have 1 years of experience in cloud computing");
    },
    hasCertification : ['aws', 'azure'], //arrays can be used in object literals
     // let hasCertification = true; //this will throw an error as let and const cannot be used in object literals
}

console.log(person.name);
console.log(person.designation);
person.yearsOfExperience(); //calling the method yearsOfExperience of the person object
console.log(person.hasCertification);
```

# Object methods:

- object methods are functions that are defined inside an object and can be called using the object name
- object methods are used to perform actions on objects
- object methods are defined using key value pairs where the value is a function
- these are functions defined as properties of an object

```jsx
// methods are functions that are defined as properties an object
//they have access to the object's properties and can modify them using the this keyword that refers to the current object

const calculator = {
    add : function(a, b){ //add is a method of the calculator object
        return a + b;    //it adds two numbers and returns the result
    },
    },
    subtract : function(a, b){
        return a - b;
    },
    multiply : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a / b;
    }
}

const result = calculator.add(10,3);  //calling the add method of the calculator object 
console.log(result); //result will be printed as 13

console.log(calculator.add(10,3) + " is add result"); // 13 is add result
console.log(calculator.subtract(7,3)); // 10
console.log(calculator.multiply(4,3)); // 12
console.log(calculator.divide(15,5)); // 3
```

# Property shorthand:

- property shorthand is a way to simplify the object creation syntax
- instead of writing the key value pair, we can just write the key and the value will be automatically assigned to it
- when a property name and its value are identical, we can use the shorthand to define the object you can omit the colon and value declaration

```jsx
//porperty shorthand is a feature in ES6 that allows you to directly assign variables to object properties.
// it allows you to simplify the creation of object literals when the property name and variable name are the same

const name = 'sriram';
const designation = 'cloud engineer';

const employee = {name, designation}; //property shorthand 

console.log(employee.name); // sriram
console.log(employee.designation); // cloud engineer

// The above code is equivalent to the following code:
// const employee = {name: name, designation: designation};
//properties 'name' and 'age' are directly assigned values from the variables 'name' and 'age' respectively
```