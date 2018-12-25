function solution(numbers, target) {
    var sumArr = [];
    var obj = {}
    numbers.forEach((v, i) => {
        obj[i] = [v, -v]
    })

    for(let i = 0; i < numbers.length; i++) {
        let sum = 0
        for(let value in obj) {
            
        }
    }
    
}

solution([1,1,1,1,1], 3)