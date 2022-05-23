// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
       return false
    } else {
        // make it lower case, spilt it into an array with words 
        // spilt the array of words
        // sort - sort the array 
        // join - put it together in one string 
     return s.toLowerCase().split("").sort().join("") ===         t.toLowerCase().split("").sort().join("")
    }
};

// TEST
const apple = "Fiji"
// add all the letters together
const words = apple.split("").sort().join("")
console.log(words)
//expected output: Fiij 

