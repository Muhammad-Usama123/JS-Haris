// Introduction To Promises:

    // The solution to the call back hell is promises. A promise is a "promise of code execution". The code either executes or fails, in both the cases the subscriber will be notified.

    // Promise Syntax: 

        // let promise = new Promise(function(resolve, reject){ // Note: resolve and reject are predefined in JavaScript engine.
            // executor
        // }) 

        // Note: resolve and reject are 2 callbacks provided by JavaScript itself. They are called like this:

            // resolve(value) // Note: If the job is finished succesfully.
            // reject(error) // Note: If the job fails.

        // Note: The promise object returned by the new Promise constructor has these properties:

            // 1) state: 

                // Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.

            // 2) result: 

                // Initially undefined, then changes to value if resolved "resolve(value)" or error when rejected "reject(error)"