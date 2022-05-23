/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Parameter: 2 strings = s, t
// Return: boolean
// Example: 

var isAnagram = function(s, t) {
    // if conditional to see if length of both equal ea other
    if (s.length != t.length){
        // return false
        return false 
    } else {
        // method: .sort()
        // assign new variables
        // if conditional: if it equals each other, return true 
        s.sort();
        t.sort();
        
        for (let i=0; i < s.length; i ++){
            if (s[i] != t[i]){
                return false; 
            }
        }
    } 
};



// input s = fell, t = mell 
// TEST
// isAnagram("fell","mell") // output false
// isAnagram("fell","llef") // output true
isAnagram("anagram","nagaram")

