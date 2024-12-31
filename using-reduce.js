function adder(arr, init) {
    if (init === undefined) {
        init = 0
    }
    return arr.reduce((accu, curr) => accu + curr ,init)

}
function sumOrMul(arr, init) {
    if (init === undefined) {
        init = 0
    }
    let res = arr.reduce(function (acc, curr) {
        if (curr % 2 === 0) {
            return acc * curr
        } else {
            return acc + curr
        }

    }, init
    )
    return res

}

function funcExec(arr, init) {
    if (init === undefined) {
        init = 0
    }
    let result = arr.reduce(function (acc, curr) {
        return curr(acc)
    }, init)
    return result
}
// console.log(adder([9, 24, 7, 11, 3], 10));
