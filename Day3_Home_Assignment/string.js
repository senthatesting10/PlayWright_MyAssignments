
/* Given a string s consisting of words and spaces, return the length of the last word in the string.
    Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. 

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4. 

Example 3:  
Write a function to check if two strings are anagrams.
    Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */

//Example 1

let s = "Hello World" 
let words=s.split(" ");

//get last value
let lastword = words[words.length -1]
console.log(lastword.length);

Output: 5 
//Explanation: The last word is "World" with length 5.

console.log("-----------------------------------");

//Example 2:
let s1 = "   fly me   to   the moon  ";
let trm =s1.trim().split(" ");

//get last value count
let lastword1=trm[trm.length -1]
console.log(lastword1.length);

//Output: 4
//Explanation: The last word is "moon" with length 4. 

console.log("---------------------------------------");

//Example 3:  
//Write a function to check if two strings are anagrams.

function isAnagram(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'));

//isAnagram('listen', 'silent')
Output: true



function isAnagram(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split('').sort().join()

    let sortedStr2 = str2.toLowerCase().split('').sort().join()

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('hello', 'world'));






















