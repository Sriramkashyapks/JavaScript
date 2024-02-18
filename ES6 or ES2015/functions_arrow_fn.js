//EXAMPLE 1

function add(a, b){
    return a+b;
}

console.log(add(5,10)); //15
// here I'm calling the function explicitly and passing the arguments w.r.t the parameters

// Arrow function
const sub = (a,b) => a - b;

console.log(sub(31,20));


// here compared to the function the arrow function is clear consize and simple



//EXAMPLE 2

const hello = () => {
    return "Hello World!";
}

console.log(hello());

//arrow function

const namaste = () => "Namaste ";

console.log(namaste) //[Function: namaste] -> wrong
console.log(namaste()) // Namaste 