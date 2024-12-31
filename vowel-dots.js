 let vowels = /(?<=[oaieu])/ig
function vowelDots(str){
    str =  str.replace(vowels, ".")
    
return str
}

