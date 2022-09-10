// https://leetcode.com/problems/string-matching-in-an-array

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    const results = [];
    
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i]
        for (let j = 0; j < words.length; j++){
            const iterativeWord = words[j]
            if (currentWord !== iterativeWord && 
                !results.includes(iterativeWord) &&
                currentWord.includes(iterativeWord)) results.push(iterativeWord);
        }
    }
    
    return results;
};