function fibonacci(n){
    const array = []
    let n1 =0, n2 =1, next
    for(let i = 0; i < n; i++){
        array.push(n1)
        next = n1 + n2
        n1 = n2
        n2 = next
    }
    return array
}