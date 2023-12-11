// Different then promise chaining.

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         console.log("Promise resolved successfully")
//     }, 3000)
// })

// p.then(handler1);
// p.then(handler2);
// p.then(handler);

// Above all 3  .thens() runs independently at the same time one by one and doesn't wait for other .thens() to return the promise cause we attached all 3 three .thens() to the above p promise not next to each other they will only wait for p to pass the promise value to them.

