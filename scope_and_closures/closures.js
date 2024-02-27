    function outer(){
        let username = "Sriram"
        // console.log("OUTER", secret); // ReferenceError: secret is not defined
        function inner(){ // closure function -> inner can access the variables of outer function
            let secret = "my123"   
            console.log("inner", username); 
        }
        function innerTwo(){
            console.log("innerTwo", username); 
            console.log(secret); // between functions we can't access the variables
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username); // username is local scope  variable