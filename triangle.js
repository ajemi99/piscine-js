function triangle ( str , num){
    let x = ""
    for ( let i = 1 ; i <= num ; i++){
         x += str.repeat(i) 
         if (i !== num){
            x += "\n"
         }

    }
return x
}
// console.log(triangle("*",5));
