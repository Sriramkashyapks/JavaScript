
//functions of makingPlans using if, else if, else

function makingPlans(a,b,c) {
    if(a == true){ // if a is true then return statemnt is printed
        return "Plan A!";
    }
    else if(b == true){
        return "plan B!";
    }
    else if(c == true){
        return "plan C!";
    }
    else{ // if none of the above case is satisfied at teh last else is printed
        return "no Plans :(";
    }
}

let finalResult = makingPlans(true, false, false);
console.log(finalResult);