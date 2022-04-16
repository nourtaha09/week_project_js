function accum(string){
    const letters = string.split('') 
    let res = ''
    for(let i in letters){
        let subLetter = ''
        subLetter += letters[i].toUpperCase()
        for(let e = 0; e < i; e++){
            subLetter += letters[i]
        }
        console.log(i, letters.length - 1)
        if(i  != (letters.length - 1)){
            subLetter += '-'
        }
        res += subLetter
    }
    return res
}