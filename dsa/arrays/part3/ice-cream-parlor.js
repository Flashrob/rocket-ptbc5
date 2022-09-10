// https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true

function icecreamParlor(m, arr) {
    
    if (m === arr[0]) return [0]
    
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        let index = [i+1];
        for (let j = i+1; j < arr.length; j++) {
            if (m === (sum += arr[j])) {
                index.push(j+1)
                return index
            }

            sum = arr[i]
        }
    }
    
    return []
}