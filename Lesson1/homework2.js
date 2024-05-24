var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['age'], function (err, result) {
    
let age = Number(result.age)

    if (age >1 && age < 5 ) {
        console.log (age + " " + "роки") 
    } else if (age >= 5 && age <= 12 ) {
        console.log (age + " " + "років")
    } else if (age % 10 === 1 && age <100) {
        console.log (age + " " + "рік")
    }
    else {
        console.log("not correct")
    };
});

