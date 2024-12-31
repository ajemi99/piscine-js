function indexOf( arr ,v , num  ){
    if (num === undefined){
        num = 0
    }
    for( let i = num ; i < arr.length ; i++) {
if (arr[i] === v ){
return i
}

}
return -1
}


function lastIndexOf(arr, v, num ){
    if (num === undefined){
        num = arr.length-1
    }
    for ( let i = num ; i >= 0 ; i-- ){
        if (arr[i] === v){
            return i
        }
    }
    return -1
}



function includes (arr, v) {
    for( let i = 0 ; i < arr.length ; i++) {
        if (arr[i] === v ){

        return true
        }
        
        }
        return false
        }
// console.log(includes([1,2,3,3],3))