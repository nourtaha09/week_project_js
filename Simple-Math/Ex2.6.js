function findCentury(year){
    const century = Math.floor((year - 1)/100) + 1
    return century
}