const arr = [1,2,3,4,5]

//what we make
console.log(arr.reduce((a, b) => a + b, 10))

function reduce(arr, start) {
    let ret = start
    for(let i = 0; i < arr.length; i++) {
        ret = ret + arr[i]
    }
    return ret
}

console.log(reduce(arr, 10))