function solution(n) {
    var answer = ''
    var cal = n / 3
    var first = Math.ceil(cal)
    var ces = String(first);

    var last = ces.split('.')[1].first();

    answer = first;
    if (last == 3) answer += 1;
    else if (last == 6) answer += 2;
    else answer += 4;

    return answer;
    
}

solution(100)