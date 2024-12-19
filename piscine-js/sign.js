function sign(num){
if (num==0){
    return 0
}
if (isPositive(num)){
    return 1
}else{
    return -1
}
}

function sameSign(num1, num2){


    if (sign(num1)== sign(num2)){
        return true
    }
    return false
}
function isPositive (num){
    if (num > 0 ){
return true
    }
        return false
    
}
