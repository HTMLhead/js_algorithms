function solution(arr, budget) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        budget = budget - arr[i]
        if(budget === 0) {
            count++
            break;
        }
        if(budget < 0) break;
        count++
    }
    return count
}