//function declaration

//eg1
function greet(name) {
    console.log('Hello ' + name + ' !'); //Hello Sriram !
}

greet('Sriram');
greet('Thatcher'); //Hello Sriram !      Hello Thatcher !

//eg2
function square(number) {
    sq =  number * number;
    console.log('sqaure of ' + number + ' is ' + sq);
}

square(10); //100


//function expression

//eg1
let greetings = function(name) {
    console.log('Hello ' + name + ' !'); //Hello Sriram !'
}

greetings('Sriram');

//eg2
let cube = function(number) {
    cube1 =  number * number * number;
    console.log('cube of ' + number + ' is ' + cube1);
}

cube(10); //1000