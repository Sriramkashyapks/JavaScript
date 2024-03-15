function sq(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
} 

// callbacks are better since ive to call the function of cube and sqaures seperately with log(print)
function totalCal(a, b, fn)  { //callback function
    let num1 = fn(a);
    let num2 = fn(b);
    return num1 + num2;
}

// here you can call a single function that has multiple functionalities like sq and cube
let total = totalCal(2, 2, cube);
console.log(total);


