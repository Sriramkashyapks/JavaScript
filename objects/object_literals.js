//object literals are a way to create objects in javascript using key value pairs and curly braces

const person = {
    name : 'sriram',
    designation : 'cloud engineer',
    yearsOfExperience : function(){ //function inside an object is called a method
        console.log("I have 1 years of experience in cloud computing");
    },
    hasCertification : ['aws', 'azure'], //arrays can be used in object literals
     // let hasCertification = true; //this will throw an error as let and const cannot be used in object literals
}

console.log(person.name);
console.log(person.designation);
person.yearsOfExperience();
console.log(person.hasCertification);