// document.cookie = key = value // Note: we will provide the key and value in this document.cookie and then it will set this cookie in our browser.

// encodeURIComponent:
// document.cookie = encodeURIComponent(key) = encodeURIComponent(value) // Note: encode uri will encode the code if we'll use special characters like ";" or "=" in our key or value pair cause operators like these produces errors in setting the cookie. For decoding we can use "decodeURIComponent()" function and pass that encoded value or key as an argument inside this function for decode to see the real key or value.

// Note: 1) The name = value pair, after encodeURIComponent, should not exceed 4kb.
    //  2) Total number of cookies per domain is limited to around 20+. (The Exact number of cookies per domain depend on the browser). We should set safe number of cookies like 15 or 17 or maximum 20.