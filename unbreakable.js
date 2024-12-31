function join (str,sbs){
    
let strr = ""
for(let i = 0 ; i < str.length ; i++){
    if(i != str.length-1){
      strr += str[i]+sbs  
    }


if ( i==str.length-1){
    strr += str[i]
}

}
return strr

}



function split (str, sbs){
 let arr = []
    if (sbs===""){
        for (let i = 0 ; i < str.length ; i++){
            
            arr.push(str[i])


        }
        return arr
    }


   
    let c =0
    let res = ""
    for(let i = 0 ; i < str.length ; i++){

        if (str.slice(i, i+sbs.length) !== sbs){
            res += str[i]
        }
        if( sbs == ""){
            arr.push(str[i])
        }
    if (str.slice(i, i+sbs.length) === sbs){
        arr.push(res)
        res = ""
        i=i+sbs.length-1
    }
    if (i==str.length-1 && arr!=0 && sbs !=""){
        arr.push(res)
    
    }
    c++
    
    }
    if (c == 0 && sbs!=""){
    arr.push(str)
    }
    
    return arr

}
// console.log(split('rrrr', '' ))

    // let len = flag.length
    // let res = ""
    // let arr = []
    // for ( let i = 0 ; i< str.length ; i++){
    //     if (len!=0) {

    //         if (str.slice(i,i+len)!==flag) {
    //             res = res + str
    //             [i]
    //         }            
    //         if (str[i]===flag && i === str.length-1) {
    //             arr.push("")
    //         }
    //         if (str.slice(i,i+len)===flag || i === str.length-1) {
    //             arr.push(res)
    //             res = ""
    //                 i = i+len-1
                
    //         }            

            
    //     }
    //     if (len===0) {
    //             res = res + str[i]
    //             arr.push(res)
    //             res = ""
    //     }

    // }
    
    // return arr










// const x ='rrrr'
// console.log(split(x, 'rr'))







