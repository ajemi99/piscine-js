function filter(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let x = func(arr[i], i, arr)
        if (x === true) {
            newArr.push(arr[i])
        }
    }
    return newArr

}
// console.log(filter([1, 2, 3], x => x > 2));

function reject(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let x = func(arr[i], i, arr)
        if (!x) {
            newArr.push(arr[i])
        }
    }
    return newArr

}
function partition(arr, func) {
    // let newArr = []
    // let f = []
    // for (let i = 0; i < arr.length; i++) {
    //     let x = func(arr[i], i, arr)
    //     if (!x) {
    //         newArr.push(arr[i])
    //     } else {
    //         f.push(arr[i])
    //     }
    // }
    // return 

    return [
        filter(arr, func),
        reject(arr, func)
    ]



}
