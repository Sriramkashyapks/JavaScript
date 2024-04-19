// object methods are functions that are stored as object properties.

//eg1
const calculator = {
    add : function(a, b) { // function is stored as object property
        return a + b;
    },
    sub :  function(a, b) { // key = sub, value = function
        return a - b;       // here we add a function as a value
    },
    mul : function(a, b) {
        return a * b;
    },
    div : function(a, b) {
        return a / b;
    }
}

let ans = calculator.add(10,20);
console.log(ans);

console.log(calculator.mul(50, 50));


//eg2

const toThePower = {
    power1 : function(a) {
        return a;
    },
    power2 : function(a) {
        return a * a;
    },
    power3 : function(a) {
        return a * a * a;
    },
    power4 : function(a) {
        return a * a * a * a;
    }
}

console.log(toThePower.power1(2));
console.log(toThePower.power2(2));
console.log(toThePower.power3(2));
console.log(toThePower.power4(2));