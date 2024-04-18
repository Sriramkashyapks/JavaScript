
//a higher order function is a function that takes a function as an argument or returns a function as a result


// Define a higher-order function add
const add = (a, b, cb) => {
    let res = a + b;
    // Call the callback function with the result -> used while a task needs lot of time to run
    cb(res); // This is where the callback function is used
}

// Call the higher-order function add with 2, 3, and a callback function
add(2, 3, (val) => { console.log(val); })



//eg2
const square = (n, callBack) => {
    let ans = n * n;
    callBack(ans);
}

square(5, (value) => {console.log(value);})