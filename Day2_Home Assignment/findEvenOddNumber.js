//Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even. 


function isOddOrEven(number) {
    let num = number;

    if (num % 2 === 0) {
        console.log("even");

    } else {
        console.log("old");

    }
}

//call function
isOddOrEven(10) //even
isOddOrEven(7) // odd
