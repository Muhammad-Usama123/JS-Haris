// In this video we will see how we can run for loop by using array.length property in condition lots of times in for loop for running the loop for appropriate number of times. then we'll see how we can use other variants of for loop for manipulating arrays or for displaying the elements of an array.

// Note: While loops can also be used with arrays. Example in Practice set of chapter 5.

// Difference between ".map()" and ".forEach()loop":

    //  Difference between ".map()" and ".forEach()loop" is that .map() returns a new array and  we use .forEach() loop when we want to perform some operation on the existing array without requiring a new array in return.

// Looping Through Arrays:

    // For Loop:

        // Arrays can be looped through using the classical javascript for loop or through some other methods discussed below: 

            // Example of for loop with arrays:

                // let num = [3, 54, 1, 2, 4]

                // for (let i=0; i<num.length; i++){
                    // console.log(num[i])
                // } // Note: This will print all the values of array one by one in the console.

                // Note: We can run for loop by using array.length property in condition lots of times in for loop for running the loop for appropriate number of times. People prefers this loop for some reason.

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

            // Example 2:

                // Note: lets suppose we have an html collection (we get html collection when we work with DOM), which is an object and we want to run ".forEach() loop" on that html collection object, so, we cannot do it because ".forEach()loop" works on array and there we have to convert that object into specifically array object by using array.from() and providing the variable name in which we stored our that HTML collection object in array.from's round bracket.

            // Example 3: 

                // let name = "Haris"
                // let arr = Array.from(name)

                //console.log(arr) // Note: This will show us this array in console "['H', 'a', 'r', 'r', 'y']". // Note: I wrote this example so we can know it also works on string.

        // 6) For Of Loop with arrays:

            // For of loop can be used to get the values from an array. For Of Loop works on arrays and objects.

            // Example: 

                // let num = [3, 5, 1, 2, 4]

                // for(let i of num) {
                    // console.log(i) // Note: This will print all the array elements of above array named num one by one in console. // Note: for of loop is shorcut way to access array items as compared to the simple for loop. We will use this for of loop alot.
                // }

        // 7) For In Loop with arrays:

            // For in loop can be used to get the keys from an array. We will probably not use this for in loop much according to Haris. For In Loop works on arrays and objects.

            // Example: 

                // let num = [3, 5, 1, 2, 4]

                // for(let i in num) {
                    // console.log(i) // Note: This will print the above array elements's index one by one as a key. 
                // }

                // for(let i in num) {
                    // console.log(num[i]) // Note: This "num[i]" in console.log will also print all the array elements of above array named num one by one in console. 
                // }

        // Note: While loops can also be used with arrays.