function binaryToNumber(binaryArry){

    let num = 0

    let counter = 0
    for(let i = binaryArry.length -1; i >= 0; i--){
        const binary = binaryArry[i]
        num += binary * Math.pow(2,counter)
        counter++
    }
    return num
}