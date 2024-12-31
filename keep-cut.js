function cutFirst (str) {
    let st = ""
    for ( let i = 2 ; i < str.length ; i++) {
st += str[i]
    }
    return st
}



function cutLast (str){
let st = ""
for( let i = 0 ; i < str.length-2 ; i++){
    st += str[i]
}
return st

}


function cutFirstLast(str){
    let st = ""
    for( let i = 2 ; i < str.length-2 ; i++){

        st += str[i]
    }
    return st
}


function keepFirst (str) {
let st = ""
if (str.length < 2){
    return str
}
for ( let i = 0 ; i < 2 ; i++ ){
    st += str[i]
}
return st

}


function keepLast (str){
    let st = ""
    if (str.length < 2){
        return str
    }
    for (let i = str.length-2 ; i < str.length ; i++){

        st += str[i]
    }
return st 

}

function keepFirstLast (str){
    let st = ""
    if (str.length < 4){
        return str
    }
    st += keepFirst(str)+keepLast(str)
    return st
} 




