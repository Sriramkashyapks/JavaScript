//eg1
setTimeout(function() {   // setTimeout is a function that takes a callback function and a time in milliseconds
  console.log('I am a callback function Im called after 3 seconds');
}, 3000);

setInterval(hola, 1 * 2000); // calling the function hola after every 2 seconds

function hola() {
  console.log("hey Amigo!");
}


//eg2
function doHomework(subject, callback) {  // here callback can be made as alert function for diffrentiating purpose ive used two different names
    console.log("Starting my " + subject+ " Homework");
    callback(subject);
}

function alertFunction(subject) {
    console.log(subject + " is finished!");
}

doHomework('math', alertFunction);