// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
function balancedSums(arr) {
    const length = arr.length;
    
    for (let i = 0; i < length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        const element = arr[i];

        if (i > 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            } 
        }
  
        for (let k = i + 1; k < length; k++) {
            rightSum += arr[k];
        }
        
        if (leftSum === rightSum) return "YES"
    }
    
    return "NO"
}