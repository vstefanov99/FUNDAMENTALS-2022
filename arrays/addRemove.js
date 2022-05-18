function addRemove(input) {
    let biggest = Number.MIN_SAFE_INTEGER
    let newArr = []
    for (let n of input) {
        if (n >= biggest) {
            biggest = n
            newArr.push(biggest)
        }
    }
    console.log(newArr.join(' '))
}
addRemove([ 1, 3, 8, 4, 10, 12, 3, 2, 24])