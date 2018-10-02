function solution(n) {
    var obj = {}
    function fibo (n) {
        if (n === 1 || n === 2) {
            obj[n] = 1
            return obj[n]
        } else if(!obj[n]) {
            obj[n] = obj[n-2] + obj[n-1] || fibo(n - 2) + fibo(n - 1)
        }
        return obj[n]
    }
    fibo(n)
    return obj[n]
}

console.log(solution(80));