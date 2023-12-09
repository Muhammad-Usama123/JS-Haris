// Array Methods:

    //Some methods of array returns a new array in result but some methods of arrays changes the original array.

    // 1) .toString() // Note: Converts an array to a string of comma separated values.

        // Example: 

            // let n = [1, 7, 9]
            // n.toString() // Note: This will give us 1,7,9 in return. // Note: Result type is string.

    // 2) .join() // Note: Joins all the array elements using a separator.

        // Example: 

            // let n = [7, 9, 13]
            // n.join("-") // Note: This will give us 7-9-13 in return. // Note: Result type is string.

    // 3) .pop() // Note: Removes last element from the array. 

        // Example: 

            // let n = [1, 2, 4]
            // n.pop() // Note: Updates the original array returns the popped value.

    // 4) .push() // Note: Adds a new element at the end of the array.

        // Example: 

            // let a = [7, 1, 2, 8]
            // a.push(9) // Note: Modifies the original array. Returns the new array length.

    // 5) .shift() // Note: Removes first element and returns it. Modifies the original array.

    // 6) .unshift() // Note: Adds element to the beginning. Returns new array length.

    // 7) .delete // Note: Array elements can be deleted using the delete operator.

        // Example: 

            // let d = [7, 8, 9, 10]
            // delete d[1] // Note: Delete is an operator. Doesn't change the array length, it will delete the value but replace that deleted value with "<1 empty item" text in the array.

    // 8) .concat() // Note: Used to join arrays to the given array.

        // Example: 

            // let a1 = [1, 2, 3]
            // let a2 = [4, 5, 6]
            // let a3 = [9, 8, 7]
            // a1.concat(a2, a3) // Note: Returns [1, 2, 3, 4, 5, 6, 9, 8, 7]. // Note: Returns a new array. Does not change existing arrays.

    // 9) .sort() // Note: sort() method is used to sort an array alphabetically.

        // Example: 

            // let a = [7, 9, 8]
            // a.sort() // Note: a changes to [7, 8, 9]. Modifies the original array.

            // Note: .sort() takes an optional compare function. If this function is provided as the first argument, the .sort() function will consider these values (the values returned from the compare function) as the basis of sorting.

            // Example Of Above Note:

                // let compare = (a, b) => {
                    //  return a - b // Note: for sorting the array into ascending order.
                // }

                // let compare = (a, b) => {
                    // return b - a // Note: for sorting the array into descending order.
                // }
                // let compare = (name of object1, name of object2) // Note: or maybe (a, b) => {
                    // return b.age - a.age // Note: for sorting the array of two objects according to age given under them. b and a necessary other things like ".age" etc etc. we will give according to datatypes etc. We can do any type of sorting using this "a - b" or "b - a" in compare function.
                // }

                // let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]

                // num.sort(compare)
                //console.log(num)

    // 10) .splice() // Note: .splice() can be used to add new items to an array. Modifies the original array.

        // Example: 

            // const numbers = [1, 2, 3, 4, 5]
            // numbers.splice(2, 1, 23, 24) // Note: The arguments that we passed under the splice bracket are 2 is for position to add in the above numbers array, 1 is number of elements to remove from inside the above numbers array and 23 and 24 are elements to be added in the above numbers array. Returns deleted items, modifies the array.

    // 11) .slice() // Note: slices out a piece from an array. It creates a new array.

        // Example: 

            // const num = [1, 2, 3, 4]
            // num.slice(2) // Note: it will return [3, 4].
            // num.slice(1, 3) // Note: it will return [2, 3].

    // 12) .reverse() // Note: Reverses the elements in the source array. Changes the original array.

        // Example: 

            // const num = [1, 2, 3, 4]
            // num.slice(2) // Note: it will return [3, 4].
            // num.slice(1, 3) // Note: it will return [2, 3].