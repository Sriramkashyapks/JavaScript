// promises are a way to handle async code in a more readable way
// instead of lot of nested callbacks, we can use promises to chain async code -> method chaining

/*
function eatNoodles(callback){

    setTimeout(() => { // write the callback function
        console.log("Finished eating noodles!");
        callback(); //calling the callback function
    }, 1500);
}

function washUtensils(callback) {

    setTimeout(() => {
        console.log("Utensils are perfectly washed");
        callback();
    }, 2000);
    
}

function walkDog(callback) {

    setTimeout(() => {
        console.log("walked Dog");
        callback();
    }, 1500);
    
}

eatNoodles(()=> {
    washUtensils(() => {
        walkDog(() => 
                console.log("All the tasks are accomplished!!"));
    });
});

*/

// instead of falling into a nested callback trap we can use promises instead


function eatNoodles() {

    return new Promise ((resolve, reject) => {
        setTimeout(() => { // write the asynchronous function

            const ateNoddles = true;

            try{
                if(ateNoddles == true){
                    resolve("Finished eating noodles!");
                }
                else{
                    reject("Noodles is not good");
                }

            }
            catch{
                console.error(error);
            }

           
        }, 1500);
    });
}

function washUtensils() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const utensilsWashed = true;

            try{
                if(utensilsWashed == true){
                    resolve("Utensils are perfectly washed");
                }
                else{
                    reject("Utensils are not washed");
                }
            }
            catch{
                console.error(error)
            }
        }, 2000);
    });
}

function walkDog() {

    return new Promise((resolve, reject) => {

        //creating an asynchronous function
        setTimeout(() => {

            const dogWalked = false;

            try{
                if(dogWalked == true){
                    resolve("walked Dog");
                }
                else {
                    reject("Walking dog is not yet finished");
                }
            }
            catch{
                console.error(error);
            }

        }, 1000);
    });
}

eatNoodles()
    .then(value => {
        console.log(value);
        return washUtensils(); // call washUtensils function
    })
    .then(value => {
        console.log(value);
        return walkDog(); // call walkDog function
    })
    .then(value => {
        console.log(value);
        console.log("All the tasks are accomplished!!");
    });
