//Learn how to use callbacks to handle asynchronous tasks in JavaScript. 

let browser ="Chrome";

// Function accept call back
function checkBrowserVersion() {
    setTimeout(() => {
      browserVersion()  
    }, 2000);
}

//call back function
function browserVersion() {
    console.log("Browser Version using callback: Chrome");
}


//call function and pass call back
checkBrowserVersion(()=>{
    browserVersion()
})

