function lengthOfTheShortest(string){
    const words = string.split(" ")
    words.sort((a,b)=>a.length - b.length)
    return words[0].length
}