var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('');
var input = fs.readFileSync('test.text').toString()
function solution(input) {
    console.log(Math.pow(2, input) - 1)
    hanoi(input, 1, 3)
}
function hanoi(n, fr, to) {
    if (n === 1) {
        console.log(fr, to)
        return
    }

    var other = 6 - fr - to
    hanoi(n - 1, fr, other)
    hanoi(n - 1, other, to)
    
    console.log(fr, to)
}

solution(input)