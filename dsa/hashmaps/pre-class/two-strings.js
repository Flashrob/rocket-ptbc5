// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    const obj = {};
    
    for (let i = 0; i < s1.length; i++) {
        if (obj[s1[i]]) continue;
        obj[s1[i]] = true;
    }
    
    for (let j = 0; j < s2.length; j++) {
        if (obj[s2[j]]) return 'YES'
    }
    
    return 'NO'

}