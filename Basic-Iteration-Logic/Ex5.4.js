function toWeirdCase(string){
    const array = string.split(" ")
    let res = ""
    for(let word of array){
        let weirdWrod = ''
        for(let i = 0; i < word.length; i++){
            let chr = word[i]
            if(i % 2 === 0){
                weirdWrod += chr.toUpperCase() 

            }else{
                weirdWrod += chr.toLowerCase()
            }
        }

        res += `${weirdWrod} `
    }
    return res.trim()
}