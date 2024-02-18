# JavaScript Basics

# 1. variables:

Variables are like containers which is used to store data and perform many functions like 

1. Store 
2. retrieve
3. manipulate

data in your program

Declaration can be done using 3 keywords `var`  `let` `const`

```jsx
var x;
```

```jsx
var x = 10;
```

```jsx
let x = 20; //variable that can be reassigned later.
// let x= 20;
// x=10; -> valid
```

```jsx
const z =30; //variable that cannot be reassigned later.
// const z= 30;
// z = 15; -> not valid, throws error

```

![Untitled](JavaScript%20Basics%207d6a62d4699f41bc96b4238ad3dc41d9/Untitled.png)

variable naimg rules:

```jsx
1. Variable names can only contain letters, digits, underscores, and dollar signs.
2. Variable names cannot start with a digit.
3. Variable names are case-sensitive.
4. It is also a good practice to use descriptive and meaningful names for your 
variables, as this makes your code easier to read and understand.
```

# 2. DataTypes:

## Primitives:

Primitives are the simplest and most basic data types in JavaScript. They include:

- Numbers (e.g. 10, 3.14)
- Strings (e.g. "hello", 'world')
- Booleans (e.g. true, false)
- Null (a special value that represents an absence of value)
- Undefined (a special value that represents an uninitialized variable)

Primitives are immutable, which means that once they are created, they cannot be changed. For example:

```jsx
let x = 10;
x = 20; // x is now 20
```

In this example, the value of "x" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.

## Objects:

Objects are more complex datatypes in JS used to represent abstract concepts or real world objects.

objects are mutable (can be changed after they are craeted)

It consist of key-value pair, where

- key → strings
- values → any dataType

```jsx
let obj = { name: "John", age: 30 };
obj.age = 31; // the age property of obj is now 31
console.log(obj);

/*
 output:
{ name: 'John', age: 31 } 
*/
```

In this example, the "age" property of the "obj" object is changed from 30 to 31. This changes the value of the object itself, rather than creating a new object.

There are several other data types in JavaScript that are classified as objects, including

- arrays
- functions
- dates

These data types behave similarly to objects in that they are mutable and can be modified after they are created.

# 3. Operators:

Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). 

For example, the addition operator (+) adds two operands together which needs to be similar datatype and the assignment operator (=) assigns a value to a variable.

There are several types of operators in JavaScript, including:

- Arithmetic operators (e.g. + , - , * , / , % )
- Comparison operators (e.g. >, <, >=, <=, ==, !=)
- Logical operators (e.g. &&, ||, !)
- Assignment operators (e.g. =, +=, -=, *=, /=)
- Conditional (ternary) operator (e.g. ?:)

```jsx
let x = 10;
let y = 20;
let a = 10 + 5 * 3; // a is 25
let b = (10 + 5) * 3; // b is 45
```