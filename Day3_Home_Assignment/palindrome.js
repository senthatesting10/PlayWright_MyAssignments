
//Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
//palindrome, then test your function with various strings and print the results.



function palindrome() {
    let pali = "Malayalam"
    let reversed = "";
    let arr1 = pali.toLowerCase().split("")
    for (let i = arr1.length -1; i>=0; i--) {
        reversed = reversed +arr1[i]
    }
  
    if (pali.toLowerCase()=== reversed) {
        console.log("This is a palindrome");
    }else{
        console.log("Not palindrome");
        
    }
}

palindrome()
