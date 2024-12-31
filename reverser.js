function reverse (arr){
    if( typeof arr === "object"){
    let arry = []
for (let i = arr.length-1 ; i >= 0 ; i--){
arry.push(arr[i])
}
return arry
}
if (typeof arr ==="string"){
    let str = ""
    for (let i = arr.length-1 ; i >= 0 ; i--){
        str +=arr[i]
        }
        return str
        }
}

