//eg1
function outerFunction() {
    var outerVariable = "I am from outer function";
    
    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var myFunction = outerFunction();
myFunction(); // Output: I am from outer function

//eg2
function makeCounter() {
    let count = 0;
    return function() {
      count += 1;
      return count;
    };
  }
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1()); // Outputs: 1
  console.log(counter1()); // Outputs: 2
  console.log(counter2()); // Outputs: 1
  console.log(counter2()); // Outputs: 2
  