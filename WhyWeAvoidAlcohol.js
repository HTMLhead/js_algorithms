//역량이라는 능력치가 있습니다. 만약에 술을 마시게 된다면, 역량이라는 능력치는 오르지 않습니다.
//술을 마시는 정도와 역량의 능력치가 오르는 정도는 random함수로 더해지게됩니다.
//alcoholicDay에는 day의 숫자와 같은 길이의 불리언 값만이 포함된 배열이 들어갑니다.
function getAbility(day, alcoholicDay) {
    const abilityArr = new Array(day).fill(0)//미래의 더해질 능력치 배열 생성
    const studiedAbilityArr = abilityArr.map(v => {
        let studyAmount = Math.floor(Math.random() * 9 + 1)//랜덤으로 추가
        return v + studyAmount    
    })
    studiedAbilityArr.forEach((v, i) => {
        if(alcoholicDay[i]) {//하지만 술을 마신다면
            studiedAbilityArr[i] = 0//그날과
            studiedAbilityArr[i+1] = 0//그 다음날에 공부할 수 없어짐.
        }
    })
    return studiedAbilityArr
}

getAbility(5, [true, false, false, false, false])