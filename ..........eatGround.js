function solution(land) {
    var bigNum = 0
    var firstArr = land.shift() 
    bigNum = Math.max(...firstArr)
    var bigNumIndex = firstArr.indexOf(bigNum)
    land.forEach((arr) => {
        var nextBigNum = Math.max(...arr)
        if(arr.indexOf(nextBigNum) === bigNumIndex) {
            nextBigNum = arr.map(v => v).sort()[arr.length-2]
            bigNum = bigNum + nextBigNum
        } else {
            bigNum = bigNum + nextBigNum
        }
    })
    var secondBigNum = firstArr.map(v => v).sort()[firstArr.length-2]
    var secondBigNumIndex = firstArr.indexOf(secondBigNum)
    land.forEach((arr) => {
        var nextBigNum = Math.max(...arr)
        if(arr.indexOf(secondBigNum) === secondBigNumIndex) {
            nextBignum = arr.map(v => v).sort()[arr.length-2]
            secondBigNum = secondBigNum + nextBigNum
        } else {
            secondBigNum = secondBigNum + nextBigNum
        }
    })
    if(secondBigNum > bigNum) {
        return secondBigNum
    } else {
        return bigNum
    }
}
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));