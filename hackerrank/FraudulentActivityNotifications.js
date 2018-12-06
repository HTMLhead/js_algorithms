'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    var arr = expenditure.splice(0, d)
    var notification = 0
    while (expenditure.length !== 0) {
        var sortedArr = arr.sort()
        if (d % 2 === 0) {
            var slicedArr = sortedArr.slice(d / 2 - 1, d / 2 + 1)
            var median = (slicedArr[0] + slicedArr[1]) / 2
        } else {
            var median = sortedArr[d / 2 - 0.5]
        }
        var shifValue = expenditure.shift()
        if (median * 2 <= shifValue) {
            notification = notification + 1
        }
        arr.push(shifValue)
    }
    return notification
}

activityNotifications([2 ,3 ,4 ,2 ,3 ,6 ,8 ,4 ,5], 5)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));
    let result = activityNotifications(expenditure, d);
    ws.write(result + "\n");
    ws.end();
}
