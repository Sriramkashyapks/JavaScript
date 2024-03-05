const fs  = require('fs');
//filesystem module

// readFile is used to read the file
fs.readFile("a.txt", "utf8", function(err, data) { //utf8 is used to convert the buffer data to string
    console.log(data);
});


console.log("Hello there!");
//Hello there! -> it will run first since data is inside the file
// Hey there I'm Sriram.
add = 1;
for (let i=0;i<5;i++){
    add = add + i;
}
console.log(add); //Hello there!
// 11
// Hey there I'm Sriram.

//when thread becomes idle the delegate fn is called