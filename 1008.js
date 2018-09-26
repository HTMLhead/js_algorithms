var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('');
var input = fs.readFileSync('test.text').toString().split(' ')

var a = Number(input[0])
var b = Number(input[1])

if((a / b).length > 10) {
    console.log((a / b).toFixed(10))
} else {
    console.log((a / b))
}

var a = 0.33333333333333333333333333333333
console.log(a)