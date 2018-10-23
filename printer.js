function solution(list, loc) {
    const indexArr = new Array(list.length).fill(0).map((v, i) => i)
    debugger;
    const answerArr = []
    const answerArr2 = [];
    while (list.length !== 0) {
        for (let i = 0; i < list.length; i++) {
            if (list[0] >= Math.max(...list)) {
                answerArr.push(list.shift())
                answerArr2.push(indexArr.shift())
            } else {
                list.push(list.shift())
                indexArr.push(indexArr.shift())
            }
        }
    }
    return indexArr.indexOf(loc) + 1
}

console.log(solution([2, 3, 2, 3, 2, 3, 2, 3], 3))