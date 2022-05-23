// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// PARAMETERS: array of integers = num, integer target
// RETURNS: indice (index position) of num array that equal target, number
// EXAMPLE:


var twoSum = function(nums, target) {
    // FUNCTION: 
        // a. use a for loop for 2 items 
        // b. conditional to see if it equals to target 
    for (let i=0; i<= nums.length; i++) {
        for (let k=i+1; k <= nums.length; k++ ){
            // b. 
            if (nums[i]+nums[k]== target){
                return [i,k]
            }
        }
    }
};


         
// RESULT 
       // INPUT 
            //  num = [7,2,3,4,5]
            // target = 10 
        // TEST
            // twoSum([7,2,3,4,5],10) 
        // OUTPUT
            // [1,2] 

