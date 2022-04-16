function maskify(string){
    let res  = ''
    for(let i = 0; i < string.length; i++){
        if(i >= string.length - 4){
            res+= string[i]
        }else{
            res+= "#"
        }
    }
    return res
}