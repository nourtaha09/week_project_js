function findNextSquare(square){
    const root = Math.pow(square, .5)
    if(root % 1 !== 0) return -1
    const next = root +1
    return Math.pow(next, 2)
}