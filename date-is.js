function isAfter (arg1, arg2){
    if( arg1 > arg2){
        return true
    }
    return false
}
function isBefore(arg1, arg2) {  

    if( arg1 < arg2){
        return true
    }
    return false
}
function isFuture(date) {

  let  dateNow = new Date()
  if((typeof date === "number"|| typeof date === "object") && isAfter(date,dateNow)){
    return true
  }
  return false
}
function isPast(date) {
    if((typeof date === "number"|| typeof date === "object") &&isBefore(date,new Date)){
        return true
    }
    return false
}
function isValid(date) {
    if((typeof date === "object" || typeof date === "number")&& !isNaN(date)){
        return true
    }
    return false
}
// console.log(isBefore(new Date('')))

