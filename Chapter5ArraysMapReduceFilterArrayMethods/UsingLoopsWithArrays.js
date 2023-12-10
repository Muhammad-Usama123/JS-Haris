// In this video we will see how we can run for loop by using array.length property in condition lots of times in for loop for running the loop for appropriate number of times. then we'll see how we can use other variants of for loop for manipulating arrays or for displaying the elements of an array.


// Looping Through Arrays:

    // For Loop:

        // Arrays can be looped through using the classical javascript for loop or through some other methods discussed below: 

            // Example of for loop with arrays:

                // let num = [3, 54, 1, 2, 4]

                // for (let i=0; i<num.length; i++){
                    // console.log(num[i])
                // } // Note: This will print all the values of array one by one in the console.

                // Note: We can run for loop by using array.length property in condition lots of times in for loop for running the loop for appropriate number of times.

        // 1) For Each Loop: 

            // calls a function, once for each array element.

            // const a = [1, 2, 3]
            // a.forEach((value, index, array) => {
                // Function logic
            // })

            // Example:

                // let num = [3, 54, 1, 2, 4]
                
                // num.forEach((element) => {
                    // console.log(element*element)
                // }) // Note: this will give us a new array in which the values will be square of the values in original array above named num. Means in new array that we will get after running this for each loop the values will be [9, 2916, 1, 4, 16] which are the square values of the values given in above array named num.

        // 2) .map():

            // Creates a new array by performing some operation on each array element.

            // Example: 

                // const a = [1, 2, 3]
                // a.map((value, index, array) => {
                    // return value*value;
                // })
        // 3) .filter():

            // Filters an array with values that passes a test. Creates a new array.

            // Example: 

                // const a = [1, 2, 3, 4, 5]
                // a.filter((greater_than_5) => {
                    // return value*value;
                // })
        // 4) .reduce():

            // Reduces an array to a single value.

            // Example: 

                // const n = [1, 8, 7, 11]
                // let sum = n.reduce(add) // Note: This will return 27 as a result cause this function added all the values of above array named "n" cause we passed add inside this method as an argument.

        // 5) Array.from():

            // Used to create an array from any other object.

            // Example: 

                // Array.from("Haris")

        // 6) For Of Loop with arrays:

            // For of loop can be used to get the values from an array.

        // 7) For In Loop with arrays:

            // For in loop can be used to get the keys from an array.