// function that takes two numbers as arguments and returns the larger of the two.

function largest(num1, num2) {
    return num1 > num2 ? num1 : num2; // if num1 is greater num1 is returned else num2
}

let largeNumber = largest(10, 20); // calling largest function and passing value to it(call by value), this is stored in a variable called largeNumber
console.log(largeNumber); 
