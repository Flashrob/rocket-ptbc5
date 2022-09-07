// https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
function missingNumbers(arr, brr) {
    const a = {}
    const b = {}
    const results = []
    
    for (let i = 0; i < brr.length; i++) {
        if (arr[i]) {
            a[arr[i]] = a[arr[i]] ? a[arr[i]] += 1 : 1;
        }
        b[brr[i]] = b[brr[i]] ? b[brr[i]] += 1 : 1;
    }
    
    for (let [key, value] of Object.entries(b)) {
        if (value !== a[key]) results.push(key)
    }
    
    return results
}

console.log(missingNumbers([203 ,204 ,205 ,206 ,207, 208 ,203, 204 ,205 ,206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))