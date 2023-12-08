// Strings:

    // String is a collection of characters.

    // Strings are used to store and manipulate text. 

    // String can be created using the following syntax:

        // let name = "Haris" // Note: "Haris" Creates a string.
        // name.length // Note: This property prints length of the string.

    // Template Literals: 

        // Template literals use backticks instead of quotes to define a string.

        // let name = `Haris`

        // With template literals, it is possible to use both single as well as double qoutes inside a string. For example:

            // let sentence = `The name "is" Haris's`

        // We can insert variables directly in template literal. This is called string interpolation. For example:

            // let a = `This is ${name}` // Note: If we console.log(a) it will print "This is Haris" in console and "name" inside "${name}" inside backticks is variable.

    // Escape Sequence Charachters In Strings: 

            // If you try to print the following string, JavaScript will misunderstand it:

                // let name = 'Adam D'Angelo'

                // We can use single quote escape sequence to solve the problem:
                
                    // let name = 'Adam D\'Angelo'

                // Similarly we can use "\"" inside a string with double quotes.

            // Other Escape Sequence Characters Are As Follows:

                    // *) \n // Note: Newline
                    // *) \t // Note: Tab
                    // *) \r // Note: Carriage Return

        