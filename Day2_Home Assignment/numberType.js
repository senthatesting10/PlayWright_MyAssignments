
//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type. 



function tofindvalue(num) {
    if (num > 0) {
        console.log("Positive Number");
    } else if (num < 0) {
        console.log("Negative Number");
    } else {
        console.log("Neutral Number");
    }
}

//call function
tofindvalue(10) //Postive Number
tofindvalue(-1) //Negative Number
tofindvalue(0) //Neutral Number