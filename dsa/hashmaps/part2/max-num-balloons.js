// https://leetcode.com/problems/maximum-number-of-balloons

/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    const balloon = 'balloon';
    if (text.length < balloon.length) return 0;

    const obj = {};
        const balloonKeys = {
        b: 1,
        a: 1,
        l: 2,
        o: 2,
        n: 1
    }
    
    for (let i = 0; i < text.length; i++) {
        obj[text[i]] = (obj[text[i]] || 0) + 1;
    }
    
    const result = [];
    
    const objEntries = Object.entries(obj);

    for (const [key, value] of objEntries) {
        if (!(key in balloonKeys)) continue;
        result.push(Math.floor(obj[key] / balloonKeys[key]))
    }

    if (result.length < 5) return 0;
    return Math.min(...result);
};