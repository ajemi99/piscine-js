function map (arr,func){
    let newArr = []
    for (let i = 0 ; i < arr.length ; i++){
         newArr.push(func(arr[i],i,arr))
    }
    return newArr
}
// console.log(map([1,2,3],x =>x+2))

function flatMap (arr,func){
    let newArr = []
    for (let i = 0 ; i < arr.length ; i++){
         let x =func(arr[i],i,arr)
         if (Array.isArray(x)){
            newArr.push(...x)
         }else{
            newArr.push(x)
         }
    }
    return newArr
}