# Functions

- Functions are reusable block of code that performs some specific tasks.
- can define them either by function declaration or by function expression.

## 1. Function Declaration

- function keyword
- define functions with specific name and parameter

```jsx
//function declaration

//eg1
function greet(name) {
    console.log('Hello ' + name + ' !'); //Hello Sriram !
}

greet('Sriram');
greet('Thatcher'); //Hello Sriram !      Hello Thatcher !

//eg2
function square(number) {
    sq =  number * number;
    console.log('sqaure of ' + number + ' is ' + sq);
}

square(10); //100
```

## 2. Function Expression

- use function keyword but without name
- assigned to a variable

```jsx
//function expression

//eg1
let greetings = function(name) {
    console.log('Hello ' + name + ' !'); //Hello Sriram !'
}

greetings('Sriram');

//eg2
let cube = function(number) {
    cube1 =  number * number * number;
    console.log('cube of ' + number + ' is ' + cube1);
}

cube(10); //1000
```

# Callback Functions

- Functions are passed as arguments to other functions
- its often used in asynchronous programming or event handling

```jsx
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or operation.

//eg1
setTimeout(function() {
  console.log('I am a callback function Im called after 3 seconds');
}, 3000);

//eg2
function doHomework(subject, callback) {  // here callback can be made as alert function for diffrentiating purpose ive used two different names
    console.log("Starting my " + subject+ " Homework");
    callback(subject);
}

function alertFunction(subject) {
    console.log(subject + " is finished!");
}

doHomework('math', alertFunction); // alert function == callback ;                           callback(subject) == alertFunction(subject)
```

# Higher-Order Functions

- Functions that take other functions as arguments or return functions as results.
- Allow for creating flexible and reusable code.

```jsx
//Higher-order functions are functions that can take other functions as arguments or return functions as output.

//eg1
function applyTwice(func, arg) {
    return func(func(arg));
  }
  
  const square = function(x) {
    return x * x;
  };
  
  console.log(applyTwice(square, 5)); // Outputs: 625
  

//eg2
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

var double = multiplier(2);
console.log(double(5)); // Output: 10

var triple = multiplier(3);
console.log(triple(5)); // Output: 15
```

# Closures

- Inner functions that have access to variables from their outer function's scope, even after the outer function has returned.
- Used for creating private variables and data encapsulation.

```jsx
//Closures refer to the ability of a function to access variables from its containing scope even after the function has finished executing.

//eg1
function outerFunction() {
    var outerVariable = "I am from outer function";
    
    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var myFunction = outerFunction();
myFunction(); // Output: I am from outer function

//eg2
function makeCounter() {
    let count = 0;
    return function() {
      count += 1;
      return count;
    };
  }
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1()); // Outputs: 1
  console.log(counter1()); // Outputs: 2
  console.log(counter2()); // Outputs: 1
  console.log(counter2()); // Outputs: 2
```