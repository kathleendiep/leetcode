const palindrome = (str) => {
    const stringOfLetters = str.split('').reverse().join('')
    console.log(stringOfLetters)
}

palindrome("hello")

function solution(inputString) {
    if (inputString.length > 0) {
        // put as one string 
        const reverse = inputString.split("").reverse().join("")
        console.log(inputString)
        console.log(reverse)
        if (reverse === inputString){
            return true;
        } else {
            return false;
        }
    }
}
solution("string") // false
solution("bbabb") // true
solution("b") // true 
solution("aabaa")

// PARAMETER: 
    // inputString 
    // this is a string 
    // test case if it's more than 0 

// RESULT: 
    // return boolean true or false if reverse of string is same as original string
    
// ASSUMPTION:
    // take in the string, see if it returns same from L to R  & R to L
    // if so, return true 
    
    

// EXAMPLE 



// APPROACH
    // method: spilt("").reverse().join("")
    // variable: store as a new variable = reverse* 
            // const reverse = ""
            
    // if compare inputString to newVariable 
    // return reverse 
    
    
