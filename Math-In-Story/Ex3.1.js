function nb_year(p0, percent, aug, p){
    if(p0 >= p) return 0
    
    let yearsCounter = 0
    let pCounter = p0
    do{
        pCounter = pCounter + (pCounter * (percent / 100)) + aug
        yearsCounter++
    }while(pCounter < p)
    return yearsCounter
}