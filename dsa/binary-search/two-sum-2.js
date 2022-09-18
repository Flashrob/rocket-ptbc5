/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) { 
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    
    while(true) {
        if (numbers[leftIndex] + numbers[rightIndex] === target) return [leftIndex + 1, rightIndex + 1]
        
        if (numbers[leftIndex] + numbers[rightIndex] > target) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }
};