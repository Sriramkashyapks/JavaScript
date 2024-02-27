/*
function add (num1, num2){
    let result = num1 + num2;
    return(result);
}

function fnPassive(data){
    console.log("Given " + data + " is the result");
}

function fn(data){
    console.log("result : " + data);
}

let sum = add (20 ,30); --> approach that is generic
console.log(sum);
*/

// question
// You are only allowed to call one functon after this 
//How will you diplay result of add


function add (num1, num2, displayFn){ // Ive considered displayFn as a callback function
    let result = num1 + num2; 
    displayFn(result); // calling the callback function
}

function fnPassive(data){
    console.log("Given " + data + " is the result");
}

function fn(data){
    console.log("result : " + data);
}

console.log(add(10, 20 ,fn)); // 30 undefined --> bcs it dosent return anything

let sum = add (20 ,30, fn); // result : 50
