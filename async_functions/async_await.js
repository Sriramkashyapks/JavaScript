function eatNoodles() {
    // writing promise function
    return new Promise ((resolve, reject) => {

        //calling async function
        setTimeout(() => {

            const ateNoddles = true;

            if(ateNoddles == true){
                resolve("Finished eating noodles!");
            }
            else{
                reject("Noodles is not good");
            }
        }, 1500);
    });
}


function washUtensils() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const utensilsWashed = true;

            if(utensilsWashed == true) {
                resolve("Utensils are perfectly washed");
            }
            else{
                reject("Utensils are not washed");
            }
        }, 2000);
    });
}

function walkDog() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const dogWalked = false;
            if (dogWalked == true) {
                resolve("walked Dog");
            } 
            else {
                reject("Walking dog is not yet finished");
            }
        }, 1000);
    });
}


// calling async await function
// The async and await keywords in JavaScript are used to work with promises in a more comfortable, synchronous manner.
// async makes a function return promise
// await makes a function wait for a promise
//await depends on async
async function finishedTasks() {

    try{
        const eatNoodlesFinished = await eatNoodles();
        console.log(eatNoodlesFinished);
    
        const washUtensilsFinished = await washUtensils();
        console.log(washUtensilsFinished);
    
        const walkDogFinished = await walkDog();
        console.log(walkDogFinished);
    
        console.log("All the tasks are accomplished!!");

    }

    catch(error){
        console.error(error);
    }

}

finishedTasks();
