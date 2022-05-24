function solution(diffs) {
    // PARAMETERS:
        let rating = 1500; 
        let highestScore = 1500;
        let results = [];
        // diffs: [] - array of numbers that shows CHANGES IN rating 
        for ( let i = 0; i < diffs.length; i ++ ){
            rating += diffs[i];
            // console.log(rating);
            if (highestScore < rating ){
                highestScore = rating;
                console.log(highestScore)
            }
        }
    
        return [highestScore, rating]  
        // FUNCTION:
        // for loop
                // TO DO: add the increase to a new variable: newScore - MAYBE
                // need to compare to highestScore, so define let highestScore = 0;  
                    // IF: newScore > highestScore
                        // store in highestScore
            // IF i < diffs.length-1  
            // example: length is 9, but we are indexing, so it will be diffs[8] will give the last index (9)
            // else if ( i = diff.length-1 ){
                // return last one 
    }
    
    // RETURNS:
        // array with highest and current number (add the numbers to the rating variable)
        
    // EXAMPLE: 
        // input - array of number that shows changes: diffs = [-100, 200, 350, 200 ]
        // test -
        // solution([-100,200,350,100,-600]) // output: [1850, 1250] 
        // solution([0,400,10,10]) // output: [1900,1510]