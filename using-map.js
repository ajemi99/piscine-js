
function citiesOnly(arr) {
    let newarr = arr.map(ele => ele.city)
    return newarr
}
function upperCasingStates(arr) {
    let newArr = arr.map(el => el.split(" ")
        .map(ele => ele[0].toUpperCase() + ele.slice(1, ele.length)).join(" "))
    return newArr

}
function fahrenheitToCelsius(arr) {
    let newarr = arr.map(function (el) {
        if (el.split("").includes("C")) {
            return el
        } else {
            return Math.floor((parseInt(el) - 32) / 1.8) + "°C"
        }
        
    })
    return newarr
}
  


function tempForecasts(arr) {
    let newarr = arr.map(function(el){

       let res = Math.floor((parseInt(el.temperature)-32)/1.8)+"°Celsius in "+el.city+", "+ el.state.split(" ")
        .map(ele=>ele[0].toUpperCase()+ele.slice(1)).join(" ")
        return res
        
    })
   return newarr





    // let newarr = arr.map(ele => Math.floor((parseInt(ele.temperature) - 32) / 1.8) + "°Celsius in " + ele.city + ", "
    // .map(el=>el.split(" ").ele.state[0].toUpperCase()+el.state.slice(1)).join(" "))
    // return newarr
}

function trimTemp(arr) {
    let newArr = arr.map(function (ele) {
        ele.temperature = ele.temperature.replaceAll(" ", "")
        return ele
    })
    return newArr

}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california jhj',
      region: 'West',
    },
  ]));







