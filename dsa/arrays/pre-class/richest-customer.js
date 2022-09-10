/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const max = [];

  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((a, b) => a + b, 0);
    max.push(sum);
  }

  return Math.max(...max);
};

//https://leetcode.com/problems/richest-customer-wealth/
