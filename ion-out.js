function ionOut (str){
   let reg = /\w*(?<=t)(ion)/g
    let res = []
let arr = str.match(reg) || []

for (let st of arr){
    res.push(st.replace("ion",""))
}

return res

}
console.log(ionOut('kk attention, direction'));


