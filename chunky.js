function chunk (arr, size){
   
    let ar = []
    let k = []
   
    for (let i = 0 ; i < arr.length ; i++){

       
        ar.push(arr[i])
        if(ar.length===size){
            k.push(ar)
            ar = []

        }
        if (ar.length != size && i === arr.length-1 && ar.length != 0){
            k.push(ar)
        }

    }
    return k
}
//  console.log(chunk(['a', 'b', 'c', 'd'], 2))