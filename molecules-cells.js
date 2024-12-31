function DNA (str){
    let word = ""
    for ( let i = 0 ; i < str.length ; i++){
        if(str[i] === 'G'){
            word += 'C'

        }else if( str[i] === 'C'){
            word += 'G'
        }else if( str[i] === 'U'){
            word += 'A'
        }else if( str[i] === 'A'){
            word += 'T'
        }else{
            word += str[i]
        }
    }
    return word

}
function RNA (str){
    let word = ""
    for ( let i = 0 ; i < str.length ; i++){
        if(str[i] === 'G'){
            word += 'C'

        }else if( str[i] === 'C'){
            word += 'G'
        }else if( str[i] === 'A'){
            word += 'U'
        }else if( str[i] === 'T'){
            word += 'A'
        }else{
            word += str[i]
        }
    }
    return word

}

