// methods are functions that are defined as properties an object
//they have access to the object's properties and can modify them using the this keyword that refers to the current object

const calculator = {
    add : function(a, b){ //add is a method of the calculator object
        return a + b;       //it adds two numbers and returns the result
    },
    subtract : function(a, b){
        return a - b;
    },
    multiply : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a / b;
    }
}

const result = calculator.add(10,3);  //calling the add method of the calculator object 
console.log(result); //result will be printed as 13

console.log(calculator.add(10,3) + " is add result"); // 13 is add result
console.log(calculator.subtract(7,3)); // 10
console.log(calculator.multiply(4,3)); // 12
console.log(calculator.divide(15,5)); // 3