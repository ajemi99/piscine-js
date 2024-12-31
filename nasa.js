function nasa (num){
    let res = ""
    for (let i = 1 ; i <= num ; i++){
        if( i%3 === 0 && i%5 === 0){
            res += "NASA"
            if(i != num){
                res+=" "
            }
            
        }else if( i%5 === 0 ){
            res += "SA" 
            if(i != num){
                res+=" "
            }

        }else if(i%3 === 0){
            res += "NA" 
            if(i != num){
                res+=" "
            }
        }else {
            res += i
            if(i != num){
                res+=" "
            }
        }
        
    }
    return res

}
// console.log(nasa(10))