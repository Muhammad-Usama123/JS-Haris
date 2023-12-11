// difference between local storage and cookie is that cookie send request again and again but local storage send request only one time. after setting the key value pairs in local storage whether we restart the browser, whether we reload the page or whether we copy the link and open that website link in new tab for which we saved key value pairs in local storage, still those saved key value pairs will remain save in local storage. 

// Local Storage Methods:

    // 1) localStorage.setItem(key, value) // Note: for setting the key value pairs.

    // 2) localStorage.getItem(key) // Note: for getting the value of that mentioned key which we'll pass as an argument in this method.

    // 3)localStorage.removeItem(key) // Note: It will remove the key value pair from the local storage.

    // 4)localStorage.clear() // Note: It will delete anything in the local storage.

    // 5)localStorage.key(index) // Note: It will give us the key on a given index.

    // 6)localStorage.length // Note: it will show us the length of that how much key value pairs are stored inside localStorage.

    // Note: We can get and set values like an object like in the example below:\

        // Example: 

            // localStorage.one = 1

            // alert(localStorage.one)

            // delete localStorage.one

    // Important Notes: 

        // 1) Both key and values must be strings.

        // 2) We can use the 2 json methods to store objects in local storage:

            // Json.Stringify(object)
            // Json.parse(string)

    // Storage Event:

        // When the data gets updated in localStorage or sessionStorage, storage event triggers with these properties below:

        // 1) key       // Note: The key
        // 1) oldValue  // Note: previous value
        // 1) newValue  // Note: new value
        // 1) Url       // Note: Page URL
        // 1) StorageArea // Note: localStorage or sessionStorage

        // Note: We can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents.



