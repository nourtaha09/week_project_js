function unique(array){
    //1. sort the array
    //2. if the first two equal than reture last item
    //3. elese return first item
    array.sort((a,b)=>a-b)
    if(array[0] === array[1]){
        return array[array.length -1]
    }else{
        return array[0]
    }
}