// Callbacks:

    // Callback function is a function that we pass into another function as an argument, which is then invoked inside the outer function to complete an action. Basically we pass this callback function into a function if we wrote asynchronous code inside the main function and to know whether that asynchronous task is completed successfully or not we run this callback function to know that our asynchronous task is done. We can also handle errors in callback like in the example below. We'll use promises instead of callbacks due to the problem of callback hell(which is also called Pyramid Of Doom).

    // Example:

        // function loadScript(src, callback) {
        //     var script = document.createElement("script");
        //     script.src = src;
        //     script.onload = function() {
        //       console.log("Loaded script with SRC: " + src)
        //       callback(null, src);
        //     }
        //     script.onerror = function() {
        //       console.log("Error loading script with SRC: " + src);
        //       callback(new Error("Src got some error"))
        //     }
        //     document.body.appendChild(script);
        //   }
  
        //   function hello(error, src) {
        //     if (error) {
        //       console.log(error)
        //       return
        //     }
        //     alert('Hello World!' + src);
        //   }
  
  
        //   function goodmorning(error, src) {
    
        //     if (error) {
        //       console.log(error)
        //       sendEmergencyMessageToCeo();
        //       return
        //     }
        //     alert('Good morning' + src);
        //   }
  
        //   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 