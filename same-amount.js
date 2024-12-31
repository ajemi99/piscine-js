function sameAmount(str , reg1, reg2){
    let reg11 = reg1.flags.includes("g") ? reg1 : new RegExp (reg1.source,reg1.flags+ "g");
    let reg22 = reg2.flags.includes("g") ? reg2 : new RegExp (reg2.source,reg1.flags+"g")
   let arr1 = str.match(reg11) || []
   let  arr2 = str.match(reg22) || []
    return arr1.length === arr2.length
}
