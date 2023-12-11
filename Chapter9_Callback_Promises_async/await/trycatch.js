// Suppose we are running a code and between the code some line throws an error which is not handled, so the remaining code below that code (due to which we got error) will stop the below code from running due to error and code execution will stop. So that's why we use try catch syntax for handling errors so if anyline of code throws error if we handled that error in catch block then the code execution will not stop. try catch works synchronously. If an error occurs in scheduled code, like setTimeout function etc (maybe means asynchronous code), then try catch won't catch that error and the code execution will stop. In try catch only synchronous code gets handled. If we use try catch inside asynchronous(scheduled) code like settime out in which the code is showing an error then try catch will work. Try catch will work on await.

// Syntax:

    // try{
        // try the code
    // }
    // catch(error){
        // error handling
    // } 