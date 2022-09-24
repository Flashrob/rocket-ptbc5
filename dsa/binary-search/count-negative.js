//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

// BASIC
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
//  var countNegatives = function(grid) {
    
//     const columns = grid[0].length;
//     let sum = 0;
    
//     for (let i = 0; i < grid.length; i++) {
//         const row = grid[i];
        
//         if (row[0] < 0) {
//             sum += columns;
//             continue;
//         }
        
//         for (let j = 0; j < columns; j++) {
//             if (row[j] < 0) sum++;
//         }
//     }
    
//     return sum;
// };


// BETTER
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    
    const columns = grid[0].length;
    let sum = 0;
    
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        
        if (row[0] < 0) {
            sum += columns;
            continue;
        }
        
        for (let j = 0; j < columns; j++) {
            if (row[j] < 0) sum++;
        }
    }
    
    return sum;
};