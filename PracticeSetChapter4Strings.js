// Q1) What will the following print in JavaScript?

        // console.log("Har\"") 

    // Ans) 4

// Q2) Explore the includes, startsWith and endsWith functions of a string.

    // Ans) above mentioned functions tells us from their names that what they do and they return true and false in return.

// Q3) Write a program to convert a given string to lowercase.

    // Ans) let name = "Haris"

            // name.toLowercase() //Note: it will return a new string in result with all the alphabets in lower case.

// Q4) Extract the amount out of the following string.

    // let str = "Please give Rs. 1000"

    // let amount = str.slice("Please give Rs. ".length) // Note: it will return a new string "1000" and for converting this amount into number type we can write the following code:
    // Number.parseInt(amount) // Note: It will convert "1000" in string form to number form.

// Q5) Try to change 4th character of a given string. Were you able to do it?

    // Ans) let str = "abcde" 
         // str[3] = "h" // Note: This is not possible cause strings are immutable.