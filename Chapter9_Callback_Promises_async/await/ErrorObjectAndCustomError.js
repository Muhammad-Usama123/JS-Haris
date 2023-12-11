// name and message are 2 important properties of errors which we used in our catch block below and stack is also an error property.

// try{
//     console.log (Haris);
//     throw new Error("Haris is good maybe?"); // This line of code will throw normal error with the name "Error" in console.
//     throw new ReferenceError("Haris is good maybe?"); // This line of code will throw error with the error name "Reference Error" in console.
// }
// catch(error){
//     console.log(error.name); // Note: It will show us the error name like "Error" or "Reference Error" whichever type of error our code will throw
//     console.log(error.message); // Note: It will show the error message.
//     console.log(error.stack); // Note: It will show error name and message both and error line number etc. etc. in our code.
// }

// Throwing Custom Errors:

    // We can throw custom errors by using the throw syntax, below is the example of custom error:

        // Example Of Custom Error:

            // if (age > 180){
                // throw new Error("Invalid age"); // Note: "Invalid age" is our custom error that we will throw from this line of code.
                // throw new SyntaxError("error");
                // throw new ReferenceError("error"); // Note: there are many other types of JavaScript errors that we can throw and for this we can search on google or visit mdn references website.
            // }

