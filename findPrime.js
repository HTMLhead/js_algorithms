//미해결
function solution(n) {
    var primeCount = 0;
    var isPrime = false;
    var prevNum = n - 1;
    for (var i = prevNum; i > 1; i--) {
        if(n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        primeCount++
    }
    return primeCount
}
