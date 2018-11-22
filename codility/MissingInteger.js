function solution(A) {
    let sortedArr = A.sort((a,b) => a-b)
    if(sortedArr.length === 1 && sortedArr[0] < 0) {
        return 1
    }
    if(sortedArr.length === 1 && sortedArr[0] > 1) {
        return 1
    }
    var removedArr = new Set(sortedArr)
    if(!removedArr.has(1)) {
        return 1
    }
    let answer = [];
    realRemovedArr = [];
    removedArr.forEach((v) => {
        realRemovedArr.push(v)
    })
    realRemovedArr.forEach((v, i) => {
        if(v + 1 !== realRemovedArr[i + 1]) {
            answer.push(v + 1)
        }
    })
    return answer[0]
}

console.log(solution([-3,-1,0,1,2,3]))
