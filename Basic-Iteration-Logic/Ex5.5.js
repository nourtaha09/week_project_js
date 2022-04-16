function abbreviate(name){
    const splited = name.split(" ")
    let res = ''
    for(let i in splited){
        let _name = splited[i]
        if(i == 0){
            res += `${_name[0].toUpperCase()}.`
        }else{
            res += _name[0].toUpperCase()
        }
    }
    return res
}