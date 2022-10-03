// https://leetcode.com/problems/uncommon-words-from-two-sentences

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    if (!s2.length) return [];
    
    return s1.concat(' ', s2).split(' ').filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e));

//     const one = s1.split(" ");
//     const two = s2.split(" ");
//     const objOne = {};
//     const objTwo = {};
//     const uncommon = [];
    
//     for (let i = 0; i < one.length; i++) {
//         objOne[one[i]] = (objOne[one[i]] || 0) + 1;
//     }
    
//     for (let i = 0; i < two.length; i++) {
//         objTwo[two[i]] = (objTwo[two[i]] || 0) + 1;
//     }
    
//     for (const value in objOne) {
//         if (objOne[value] === 1 && !(value in objTwo)) {
//             uncommon.push(value);
//         }
//     }
    
//     for (const value in objTwo) {
//         if (objTwo[value] === 1 && !(value in objOne)) {
//             uncommon.push(value);
//         }
//     }
    
//     return uncommon;
    
};