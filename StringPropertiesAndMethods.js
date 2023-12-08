// String Properties And Methods:

    // 1) let name = "Haris"
    // console.log(name.length) // Note: Prints 5 // Note: Gives us length of string.

    // 2) let name = "Haris"
    // console.log(name.toUpperCase()) // Note: Prints "HARIS" // Note: converts string charachters into uppercase.

    // 3) let name = "Haris"
    // console.log(name.toLowerCase()) // Note: Prints "haris" // Note: converts string charachters into lowercase.

    // 4) let name = "Haris"
    // console.log(name.slice(2, 4)) // Note: Prints "ri" // Note: From index 2 to 4, 4 not included.

    // 5) let name = "Haris"
    // console.log(name.slice(2)) // Note: Prints "ris" // Note: From 2nd index to the end of string.

    // 6) let name = "Haris Bhai"
    //    let newName = name.replace("Bhai", "Bhayya") // Note: replaces "Bhai" from "Bhayya".

    // 7) let name1 = "Haris"
       // let name2 = "Khan"
       // let name3 = name1.concat(name2, "Yes") // Note: This will concat name1 with name2 in a single string and will store it in a variable named name3. We can also use "+" operator for performing this task instead of ".Concat()" method.

    // 8) let name = "   Haris   "
       // let newName = name.trim()  // Note: This will remove all the spaces.


// Strings are immutable (means we cannot change the actual string by using these string mnethods but we can store the new string that we get in result (after running these string methods) in new variable.). Inorder to access the character at an index we use the following syntax:

        // Let name = "Haris"
        // console.log(name[0]) // Note: This will print H in console.
        // console.log(name[1]) // Note: This will print a in console.

    // The following thing is not possible because strings are immutable and we cannot change the actual string by using the above string methods or any other method. For changing the actual string we'll have to go to that actual variable and do changes inside the string:

        // fr[4] = "o" // Note: Not possible due to the reasons that I mentioned in the above statement.
