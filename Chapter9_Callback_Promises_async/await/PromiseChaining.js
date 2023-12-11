// Promise Chaining:

    // Promise chaining is when we call .then() after the 1st promise is resolved and that .then() returns another promise and after resolving that .then() we write another .then() and pass the Promise value from previous .then() and so on. Every .then() returns a promise whether we mention the word new Promise inside .then() or not, if we simply return any value like "2" from a .then() it will automatically convert it into immidiately resolved promise and return that promise value too. When we explicitly mention new Promise function inside a .then(), it is called a custom promise otherwise whether we mention any new promise function inside a .then() or not it will always return a promise whose value will be passed to next .then().

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             console.log("Resolved after 2 seconds")
//             resolve(56)
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//             setTimeout(() => { resolve("Promise 2") }, 2000)
//     }) 
// }).then((value) => {
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })