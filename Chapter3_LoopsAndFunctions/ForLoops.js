// Chapter 3: Loops And Functions:

// Loops: 

        // we use loops to perform repeated actions. For example - if you assigned a task of printing numbers from 1 to 100, it will be very hectic to do it manually. Loops help us automate such tasks.

        // Types Of Loops In JavaScript:

        // *) For Loop:

            //Loop a block of code number of times.

            // Syntax: for(Statement1; Statment2; Statement3){
                // Code to be executed
            // }

            //Statement 1 will only execute 1 time.
            //Statement 2 is the condition based on which the loop runs.
            //Statement 3 is executed everytime the loop body is executed.

            // Example of Syntax: for (let i=0; i<5; i++) {
                // console.log(i)
            // }

            // In the above example i is only alive inside the above loop code outside that code if we will write console.log(i) outside the above loop code it will throw error because let is block scoped but if we'll use var with i instead of let then it will also work outside the above for loop code because var is global scoped.

            // Details of above Example Of Syntax: in the first statement the value of i is 0, then in second statement this for loop checks the given condition and in this case the condition is i<5, so, in this case the value of i is 0 which is less than 5 and because the condition is true the code inside "{}" will run, after that the loop will go to third statement and apply whatever the statement is saying and then the whole cycle except the statement 1, statement 1 will only execute 1 time when this loop will start (that I explained in this detail previously) will be repeated until the second statement becomes false and when the 2nd statement will become false the loop will stop. In other words statement 1 will only execute 1 time, statement 2 is the condition based on which the loop runs, statement 3 is executed everytime the loop body is executed.

        // *) For In Loop: 

            // Loops through the keys of an object. For In Loops also work with arrays not only object.

            // Syntax: for (key in object){
                // code to be executed
            // }

            //Example:
            // obj = {
                // Haris: 78,
                // Osama: 100,
                // Umer: 75,
                // Rohail: 80
            // }

            // for (let a in obj) {
            //     console.log("Marks of " + a + ' are ' + obj[a]);
            // }

            // result in console of above example will be (Marks of (name of all keys one by one) are (value of all keys one by one))

        // *) For Of Loop:

            // Loops through the values of an object. We will use this for arrays.

            // Syntax: for (variable of iterable){
                // Code
            // }

            //In notes In the above syntax variable is arrow marked as "For every iteration" and iterable is arrow marked as "Iterable data structure like arrays, strings etc."

            // Example: for (let b of "Haris") {
                // console.log(b)
            // }

            // The result of above example in the console will be first H then a then r then i then s.

        // *) While Loop:

            // Loops a block based on a specific condition.

        // *) Do While Loop:

            // While loop variant which runs atleast once.