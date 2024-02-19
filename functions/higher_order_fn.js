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
