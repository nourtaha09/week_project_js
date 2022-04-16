function isogram(string){
    const dulipcate = {}
    const letters = string.split('')
    
    letters.forEach(e=>{ dulipcate[e.toLowerCase()] = (dulipcate[e.toLowerCase()] || 0) + 1});
    
    let counter = 0
    Object.values(dulipcate).forEach(e=>{if(e > 1) counter++})
    if(counter > 0){
        return false;
    }else{
        return true
    }
}