function sumOfLowestNumers(array){
    //1. check the array
    //   . array should not be null and should be an array
    //   . array length shoule be >= 4
    //   . array should have only int positive numbers
    //2. sort the array 
    //3. return the sum of first and second numbers
    function isPositiveInt(n){
        return Number(n) === n && n % 1 === 0 && n > 0 
    }
    
    if(!array) return null
    if(!Array.isArray(array)) return null 
    if(array.length < 4) return null
    for(const n of array){
        if(!isPositiveInt(n)){
            return null
        }
    }
    
    array.sort((a,b) => a - b)
    return array[0] + array[1]
}