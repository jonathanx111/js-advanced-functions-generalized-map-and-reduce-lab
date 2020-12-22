// Add your functions here
function map(array, cb) {
    let n = []

    for (let i=0; i < array.length; i++) {
        n.push(cb(array[i]))
    }

    return n
}

function reduce(array, cb, startingValue) {
    let n = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < array.length; i++) {
        n = cb(array[i], n)
    }



    return n
}