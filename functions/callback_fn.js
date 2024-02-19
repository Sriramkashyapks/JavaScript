//eg1
setTimeout(function() {
  console.log('I am a callback function Im called after 3 seconds');
}, 3000);

//eg2
function doHomework(subject, callback) {  // here callback can be made as alert function for diffrentiating purpose ive used two different names
    console.log("Starting my " + subject+ " Homework");
    callback(subject);
}

function alertFunction(subject) {
    console.log(subject + " is finished!");
}

doHomework('math', alertFunction);