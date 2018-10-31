// function remove(array, index) {
//     return array.slice(0, index)
//         .concat(array.slice(index + 1));
// }

// function solution(land) {
//     debugger;
//     var bigNumArr = [];
//     var bigNumIndexArr = [];
//     land.forEach((arr, i) => {
//         var rmArr = remove(arr, bigNumIndexArr[i - 1])
//         var bigNum = Math.max(...rmArr)
//         bigNumArr.push(bigNum)
//         bigNumIndexArr.push(arr.indexOf(bigNum))
//     })
//     return bigNumArr.reduce((a,b) => a + b)
// }
function solution(land) {
    for(let i = 0; i < 4; i++) {
        Math.max(land[i]) === Math.max(land[i + 1]) 
    }
}
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));