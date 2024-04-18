/* 
function add(a, b){
    let sum = a+ b;
    console.log(sum);
}

let ans = add(10, 20);
*/

// the above function is a traditional way of writing a function
// why we use arrow functions is because it is a shorter way to write a function

// eg1

let add = (a, b) => a + b; // arrow function

let sum = add(10, 20);
console.log(sum);

//eg2 => finding large number out of two numbers

let greater = (a, b) => {
    return a > b ? a : b; // checks if a>b and returns based on the ternary condition given
}

let result = greater(20, 40);
console.log(result);


//eg3

let eligibilityCriteriaForDl = (age) => {
    return age >= 18 ? true : false;
}

let submitApplication = eligibilityCriteriaForDl (10);
console.log(submitApplication);
