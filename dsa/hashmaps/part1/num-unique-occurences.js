// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    if (arr.length === 1) return true;

    const obj = {};

    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    
    const entries = Object.values(obj);
    
    if (new Set(entries).size === entries.length) return true;
    
    return false;

};