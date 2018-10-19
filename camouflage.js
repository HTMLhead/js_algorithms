function solution(clothes) {
    var bef = {}
    clothes.forEach(arr => {
        if(bef[arr[1]] === undefined) {
            bef[arr[1]] = [arr[0]]
        } else {
            bef[arr[1]].push(arr[0])
        }
    })
    var keys = Object.keys(bef);
    num = 0;
    keys.forEach(key => {
        if(num === 0) {
            num = num + bef[key].length
        } else {
            num = num * bef[key].length
        }
    })
    num2 = 0
    keys.forEach(key => {
        num2 = num2 + bef[key].length
    })
    if(keys.length === 1) {
        return num
    } else {
        return num + num2
    }
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));