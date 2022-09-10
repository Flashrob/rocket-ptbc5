// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
function balancedSums(arr) {
    if(arr.length === 1) return 'YES';
    if(arr.length === 2) return 'NO';
    
    let leftSum = 0;
    let rightSum = arr.slice(1).reduce((acc, cur) => acc + cur, 0);
    if(leftSum === rightSum) return 'YES';
    
    for(let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        rightSum -= arr[i+1];
        
        if(leftSum === rightSum) return 'YES';
    }
    
    return 'NO';
}
