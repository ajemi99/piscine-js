function getArchitects() {
    let newArr = [];
    var myElement =  Array.from(document.getElementsByTagName("a"));
    newArr.push(myElement);
    var myEle = Array.from(document.getElementsByTagName("span"));
    newArr.push(myEle)


    return newArr
}
function getClassical() {
    let newArr = []
    var myElement1 = Array.from(document.getElementsByClassName("classical"))
    newArr.push(myElement1)
    var myElement2 = document.querySelectorAll(':not(.classical)')
    newArr.push(myElement2)

    return newArr
}

function getActive() {

    var myElement1 = Array.from(document.getElementsByClassName("classical active"))


    var kk = document.querySelectorAll("classical, :not(.active)")


    return [myElement1, kk]


}

function getBonannoPisano() {
    var id = (document.getElementById("BonannoPisano"))
    var all = Array.from(document.getElementsByClassName("classical active"))
    return [id, all]

}






export { getActive, getBonannoPisano, getArchitects, getClassical }
