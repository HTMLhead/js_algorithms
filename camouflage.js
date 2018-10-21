function solution(clothes) {
    const bef = {}
    clothes.forEach(arr => {
        if(bef[arr[1]] === undefined) {
            bef[arr[1]] = 1
        } else {
            bef[arr[1]]++
        }
    })
    const sum = Object.values(bef).reduce((a,b) => {return a+b},0)
    const mult = Object.values(bef).reduce((a,b) => {return a * b}, 1)
    if(mult === sum) {
        return sum
    } else {
        return sum + mult
    }
}

//notYet

console.log(solution(	[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))