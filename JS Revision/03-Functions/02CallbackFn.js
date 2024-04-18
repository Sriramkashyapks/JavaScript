
// callback function is a function that is passed as a parameter to another function

//eg1
setTimeout(() => {
    console.log("I'm distracted!!");
}, 2000);

//eg2
const submitAssignment = (subject, callback) => { // Define a function that submits an assignment and calls a callback
    console.log(`Starting my ${subject} Assignment`);
     // Call the provided callback with the subject
    callback(subject);
}

const finishedAssignment = (subject) => {   
    console.log(`My ${subject} Homework is finshed!!`);
}

submitAssignment("math", finishedAssignment);  //callback(subject) == finsihedAssignment(subject)