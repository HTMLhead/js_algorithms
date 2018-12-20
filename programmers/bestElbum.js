function solution(genres, plays) {
    var obj = {}
    genres.forEach((genre, i) => {
        if(obj[genre] === undefined) {
            obj[genre] = plays[i]
        } else {
            obj[genre] = obj[genre] + plays[i]
        }
    })
    
    var obj2 = {}
    genres.forEach((genre, i) => {
        if(obj2[genre] === undefined) {
            obj2[genre] = [plays[i]]
        } else {
            obj2[genre].push(plays[i])
        }
    })

    Object.keys(obj2).forEach(v => {
        obj2[v].sort((a,b) => b-a) 
    })
    
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
