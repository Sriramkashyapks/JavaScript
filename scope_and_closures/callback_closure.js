function outer(callback){
    let username = "Sriram" //global scope of outer function

    function inner(){ // closure function -> inner can access the variables of outer function
        console.log("Im Thatcher");
        callback();
    }
    return inner;
}

function callback(){
    console.log("I'm Spotter"); // this is a callback function
}

let innerFunction = outer(callback); // innerFunction is a closure function
innerFunction();