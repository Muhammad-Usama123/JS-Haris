// .map(), .filter() and .reduce() methods are higher order array methods. The usage of them saves time for us. These are modern JavaScript methods. .reduce() returns a value, .map() and .filter() returns a new array.

// Difference between ".map()" and ".forEach()loop":

    //  Difference between ".map()" and ".forEach()loop" is that .map() returns a new array and  we use .forEach() loop when we want to perform some operation on the existing array elements without requiring a new array in return.

    // 1) .map():

            // Creates a new array by performing some operation on each array element. Does not change the original array.

            // Example: 

                // const a = [1, 2, 3]
                // a.map((value, index, array) => {
                    // return value*value;
                // })

                // Example: 

                // let arr = [45, 23, 21]
                // let a = arr.map((value, index, array) => {
                    // console.log(value, index, array) // Note: This will print the values with their index and full array from where these values come from one by one.
                    // return value + 1; // Note: This will add 1 in all values of above array named arr and will return a new array of those "value+1" values. 
                // })
                // console.log(a) // Note: this will print the new array that our map function will return.

    // 2) .filter():

            // Filters an array with values that passes a test. Creates a new array. Does not change the original array.

            // Example: 

                // const a = [1, 2, 3, 4, 5]
                // a.filter(greater_than_5)

            // Example:

                // let arr2 = [45, 23, 21, 0, 3, 5]
                // let a2 = arr2.filter((a) => {
                    // return a<10 // Note: this will return all those filtered values and make a new array of those filtered values that are less than 10. 
                // })
                // console.log(a2) // Note: This will print the new array of those filtered values that is returned from above function.

    // 3) .reduce():

            // Reduces an array to a single value.

            // Example: 

                // const n = [1, 8, 7, 11]
                // let sum = n.reduce(add) // Note: This will return 27 as a result cause this function added all the values of above array named "n" cause we passed add inside this method as an argument.

            // Example:

                // let arr3 = [1, 2, 3, 5, 2, 1]
                // let a3 = arr3.reduce((h1, h2) => {
                    // return h1 + h2 // Note: this will return a single value by adding all the values that are inside the above array named "arr3" because that's how we told this function to reduce the value by mentioning "return h1 + h2" inside the function.
                // })
                // console.log(a3) // Note: This will print that reduced single value in console returned from the above reduce function.

            // Example:

                // Following is the another way of declaring the same function above.

                // let arr3 = [1, 2, 3, 5, 2, 1]
                // const reduce_func = (h1, h2) => {
                    // return h1 + h2 // Note: this will return a single value by adding all the values that are inside the above array named "arr3" because that's how we told this function to reduce the value by mentioning "return h1 + h2" inside the function.
                // }

                // let a3 = arr3.reduce(reduce_func);
                // console.log(a3) // Note: This will print that reduced single value in console returned from the above reduce function.