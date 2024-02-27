//only print the person in the array

// const personName = ["Sriram", "Kashyap", "Jeniffer"];
// const personGender = ["male", "male", "female"];
// const person = personName.length;

//instead of this we can use objects

const person = [{
    personName: "sriram",
    personGender: "Male",
}, 
{
    personName: "kashyap",
    personGender: "Male",
},
{
    personName: "Jeniffer",
    personGender: "Female"
}
]

for (let i = 0; i < person.length; i++){
    if(person[i].personGender == "Male"){    // if(person[i]["personGender"] == "Male"){
        console.log(person[i]["personName"]);
    }
}