

/*
 * Complete the 'minimalHeaviestSetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
 // ASSUMPTIONS:
    // divide array (arr) into two subsets 
        // * New variables: 
            // 2 subsets: A and B 
                // null 
                // number of elements in subset A is minimal 
                    // this could mean only 2 
                // sum of A's weight > B's weight 


 // PARAMETER: arr: array of item weight 


 // RETURN: INTEGER_ARRAY
     // sum of A's weight > B's weight 
    // sum of Asum of return subsetA in increasing order 
    // 
 



function minimalHeaviestSetA(arr) {
    // Write your code here
    for (let i=0; )
}
 // EXAMPLE 
 // input  - arr = [1,2,3,4,5]
 // test - minimalHeaviestSetA([1,2,3,4,5]) // output [4,5]
 
 
 // APPROACH
 // for loop to go through array
 // method: slice and store it into *variables: subsetA and subsetB
 // if conditional: to show which is higher 
 // *variables: sumA and sumB
 
 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = minimalHeaviestSetA(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
