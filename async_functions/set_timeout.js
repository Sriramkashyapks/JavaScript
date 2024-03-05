function add(n){
    let ans = 1;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

//lets call add function from sum function because add function is taking time to execute
// function sum(){
//    console.log(add(100)); 
// }
//setTimeout(sum, 5000); // setTimeout is a callback function and asynchronus function


setTimeout(function(){console.log(add(200));
}, 5000); // setTimeout is a callback function and asynchronus function

console.log("Hello there!"); 

//hello there will be called first; after 5 sec delay add function will be called



/*
if I wnt to make the above function synchronous
ill be using a busy function so that the compiler could concentrate on one task
function busy(){
    for(let i=0; i<1000000000; i++){
        // do nothing
    }
}
busy();
*/