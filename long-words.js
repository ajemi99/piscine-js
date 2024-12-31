function longWords(arr){
    let bool = arr.every(v => v.length >= 5)
return bool
}
// console.log(longWords(["kkkkkk","kk"]));

function oneLongWord(arr){
    return arr.some(el => el.length >=10)
}
function noLongWords(arr){
    return arr.every(el  => el.length < 7)
}