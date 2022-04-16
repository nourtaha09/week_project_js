function tribonacci(n){
    const array = []
    let n1 =1, n2 =1,n3 = 1, next
    for(let i = 0; i < n; i++){
        array.push(n1)
        next = n1 + n2 + n3
        n1 = n2
        n2 = n3
        n3 = next
    }
    return array
}