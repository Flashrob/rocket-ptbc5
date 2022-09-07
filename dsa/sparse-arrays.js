// https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true
function matchingStrings(strings, queries) {
    const tally = {}
    const result = []
    for (let i = 0; i < strings.length; i++) {
        tally[strings[i]] = tally[strings[i]] ? tally[strings[i]] += 1 : 1;
    }
    
    for (let i = 0; i < queries.length; i++) {
        result.push(tally[queries[i]] || 0)
    }
    return result
}