function toCamelCase(string){
    let wordsArray = string.split(/_|-/g)

    console.log(wordsArray)
    let res = ''
    for(let i in wordsArray){
        
        let word = wordsArray[i]
        if(i != 0){
            res += `${word[0].toUpperCase() + word.slice(1)} `
        }else{
            res += `${word} `
        }
    }
    return res.trim()
}