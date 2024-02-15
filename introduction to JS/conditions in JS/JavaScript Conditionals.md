# JavaScript Conditionals

# if ,else :

```jsx
// conditional statements in JavaScript are
// if, else, else if, switch, case, default

let a = 40;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("b is greater than a");
}
```

The "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.

# if else ladder:

The "if-else ladder" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.

```jsx
let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}
```

# Break :

- switch is used to check multiple conditions in a single block of code and is an alternative to else if ladder
- The "switch" statement in JavaScript is used to execute a block of code depending on the value of a variable.
- It is similar to an "if-else ladder" but is more concise and easier to read.
- The "switch" statement evaluates an expression and compares it with the values of the "case" clauses.
- If a match is found, the corresponding block of code is executed.
- If no match is found, the "default" block of code is executed.
- The "break" statement is used to exit the switch block after a match is found.
- The "default" block of code is optional and is executed if no match is found.

```
userInput = 5;

switch(userInput) {
    case 1:
        console.log("You entered 1");
        break;
    case 2:
        console.log("You entered 2");
        break;
    case 3:
        console.log("You entered 3");
        break;
    default:
        console.log("number scope exceeded");
}
```

# Short Conditionals :

## **The && operator**

```jsx
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}

// This operator compares the 2 conditions is both the conditions are true then only the if statemnt is executed
```

## The || operator

```jsx
const temperature = 30;
const isRaining = true;

if (temperature > 25 || isRaining) {
    console.log("It's a hot day or it's raining.");
} else {
    console.log("It's a pleasant day.");
}

//If any 1 of the condition get satisfied then if condition is executed 
```

## The Ternary operator

```jsx
const isStudent = true;
const price = isStudent ? 8 : 12;
console.log(price);

//output: 8 if input is true else 12

//here ? is used to check the condition and if the condition is true then the value before : is returned else the value after : is returned
```