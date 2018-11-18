function solution(X, A) {
    debugger
    let answerArr = [];
    let answer = -1
    A.forEach((v, i) => {
        if(answer !== -1) return;
        answerArr[v - 1] = 1
        if(answerArr[X - 1] === 1) {
            for(let j = 0; j < X; j++) {
                if(answerArr[j] !== undefined) return;
                answer = i
            }
        }
    })
    return answer
}

console.log(solution(5, [1, 2, 3, 5, 3, 1]))