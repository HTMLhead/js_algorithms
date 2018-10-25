function solution(clothes) {
    const bef = {}
    clothes.forEach(arr => {
        if(bef[arr[1]] === undefined) {
            bef[arr[1]] = 1
        } else {
            bef[arr[1]]++
        }
    })

    const valueArr = Object.values(bef)
    
    return valueArr.reduce((a,b) => {
        return a * (b + 1)
    },1) -1
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))