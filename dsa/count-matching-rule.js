// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    const rules = {
        type: 0,
        color: 1,
        name: 2,
    };
    
    return items.filter((item) => item[rules[ruleKey]] === ruleValue).length;
};