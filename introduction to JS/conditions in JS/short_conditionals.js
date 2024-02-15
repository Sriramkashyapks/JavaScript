// The && operator
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}

// The || operator
const temperature = 30;
const isRaining = true;

if (temperature > 25 || isRaining) {
    console.log("It's a hot day or it's raining.");
} else {
    console.log("It's a pleasant day.");
}

//ternary operator
const isStudent = true;
const price = isStudent ? 8 : 12;
console.log(price);

//output: 8 if input is true else 12

//here ? is used to check the condition and if the condition is true then the value before : is returned else the value after : is returned

