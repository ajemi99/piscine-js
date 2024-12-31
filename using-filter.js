function filterShortStateName(arr) {
   let newArr = arr.filter(ele => ele.length < 7)
    return newArr
}
function filterStartVowel(arr) {
   let newArr = arr.filter(ele => /^[a,e,i,o,u]/i.test(ele[0]))
    return newArr
}

function filter5Vowels(arr) {

  let  newArr = arr.filter(function (ele) {
        let c = 0
        ele.split("").filter(el => {
            if (/[a,e,i,o,u]/i.test(el)) {
                c++
            }

        })
        return c >= 5

    })

    return newArr

}

function filter1DistinctVowel(arr) {

    let newArr = arr.filter(function (el) {
        let c = 0
        if (/([e,i,u,o])/i.test(el) && /a/i.test(el) || /([a,i,u,o])/i.test(el) && /e/i.test(el) || /([e,a,u,o])/i.test(el) && /i/i.test(el) || /([e,i,a,o])/i.test(el) && /u/i.test(el) || /([e,i,u,a])/i.test(el) && /o/i.test(el)) {
            c++
        }
        return c === 0
    })

    return newArr

}

function multiFilter (arr){
  let  newArr = arr.filter(el => {
       if( el.capital.length>=8 && (/[^a,e,i,u,o]/i.test(el.name[0])) && (/[a,e,i,u,o]+/i.test(el.tag)) && el.region !== "South") {
    return el
       }
    })  
          return newArr

}


//  