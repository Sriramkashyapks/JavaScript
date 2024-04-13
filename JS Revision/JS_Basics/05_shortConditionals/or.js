const temperature = 30;
const isSunny = true;

if (temperature > 35 || isSunny) { // here the temperature is greater than 35 or isSunny is true then the if statement is executed
    console.log("It's a hot day");
} else if(temperature == 22 && isSunny) {
    console.log("It's a pleasant day.");
}
else {  
    console.log("Data is not sufficient to predict the weather.");
}

//If any 1 of the condition get satisfied then if condition is executed 