//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages.


// To find Browser Name 
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Chrome Browser")
    } else {
        console.log("Other Browser");
    }
}

//call function
launchBrowser("chrome") //Chrome Browser
launchBrowser("firefox") //Other Browser


console.log("-------------To find Browser Name ----------------------");


// To find Test suite to run

function runTests(testType) {
    switch (testType) {
        case "sanity":
            console.log("sanity");
            break;
        case "regression":
            console.log("regression");
            break
        default:
            console.log("smoke");
            break;
    }
}

runTests("sanity");//sanity
runTests("regression");//regression
runTests();//smoke

console.log("---To find Test suite to run----");
