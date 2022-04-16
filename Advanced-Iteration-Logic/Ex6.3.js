function organize(s1,s2){
    const lettersCollection = {}
    const lettersS1 = s1.split('')
    const lettersS2 = s2.split('')
    lettersS1.forEach(e=>{ lettersCollection[e.toLowerCase()] = (lettersCollection[e.toLowerCase()] || 0) + 1});
    lettersS2.forEach(e=>{ lettersCollection[e.toLowerCase()] = (lettersCollection[e.toLowerCase()] || 0) + 1});

    let resLetter = ''
    Object.keys(lettersCollection).forEach(e=>{resLetter+=e})
    return resLetter
}