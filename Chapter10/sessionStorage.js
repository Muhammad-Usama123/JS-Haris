// Session Storage:

    // Used less often than localStorage. Properties and methods are same as localStorage but:

        // 1) The sessionStorage exists only within the current browser tab. Another tab with same page  will have a different storage.

        // 2) The data survives page refresh, but not closing/opening the tab.

    // Storage Event:

        // When the data gets updated in localStorage or sessionStorage, storage event triggers with these properties below:

        // 1) key       // Note: The key
        // 1) oldValue  // Note: previous value
        // 1) newValue  // Note: new value
        // 1) Url       // Note: Page URL
        // 1) StorageArea // Note: localStorage or sessionStorage

        // Note: We can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents.