// Promise Api: 

    // There are 6 static methods of promise class:

        // 1) Promise.all([promises]):

            // Waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error and all other results are ignored.

        // 2) Promise.allSettled([promises]):

            // Waits for all the promises to settle and returns their results as an array of objects with status and value. 

        // 3) Promise.race([promises]):

            // Waits for the first promise to settle and its result/error becomes the outcome.

    // 4) Promise.any([promises]):

            // Waits for the first promise to fulfill(and not rejected) and its result becomes the outcome. Throws Aggregate Error if all the promises are rejected.

        // 5) Promise.resolve(value):

            // Makes a resolved promise with the given value.

        // 6) Promise.reject(error):

            // Makes a rejected promise with the given error.

        