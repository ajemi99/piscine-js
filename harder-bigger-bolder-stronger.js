export const  generateLetters = ()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0 ; i < 120 ; i++){
        var divElement =  document.createElement("div")
        let index = Math.floor(Math.random()*26)
        divElement.textContent= str[index]
        divElement.style.fontSize = (11 +i)+ "px"
        if (i<40){
            divElement.style.fontWeight = 300
        }else if (i < 80){
            divElement.style.fontWeight = 400
        }else{
            divElement.style.fontWeight = 600
        }
        document.body.appendChild(divElement)
    }
}
