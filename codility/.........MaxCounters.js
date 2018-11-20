function solution(N, A) {
    var obj = {}
    for(let i = 1; i <= N; i++) {
        obj[i] = 0
    }
    
    A.forEach(v => {
        if(v === N + 1) {
            var maxNum = Math.max(...Object.values(obj))
            for(let i = 1; i <= Object.keys(obj).length; i++) {
                obj[i] = maxNum
            }
            return;
        } else {
            obj[v]++
        }
    })
    return Object.values(obj)
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4] ))