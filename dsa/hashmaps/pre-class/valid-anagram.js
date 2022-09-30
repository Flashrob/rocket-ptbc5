// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const obj = { [s]: {}, [t]: {} };
    
    for (let i = 0; i < s.length; i++) {
        obj[s][s[i]] = (obj[s][s[i]] || 0) + 1;
        
        obj[t][t[i]] = (obj[t][t[i]] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        const key = s[i];
        if (obj[s][key] !== obj[t][key]) return false;
    }
    
    return true;
    
};