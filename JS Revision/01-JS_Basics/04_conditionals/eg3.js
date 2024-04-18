// exmaple of switch case

let choice = "apple"; // value of choice is apple
switch (choice) {
    case "apple": // if the value above is apple then the below log is printed
        console.log("U've Choosed apple");
        break;
    case "banana": // if the value above is banana then the below log is printed
        console.log("U've Choosed banana");
        break; // breaks the flow of the program if the condition is met
    case "chikoo":
        console.log("U've Choosed chikoo");
        break;
    case "Dragon fruit":
        console.log("U've Choosed Dragon fruit");
        break;

    default: console.log("U've Choosed none of the fruits"); // this is a case where it only prints if input is not matched or provided input value is other than the above cases
        break;
}

