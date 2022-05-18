function magic(input) {
    for (let arr1 of input) {
        console.log(arr1)
        let sum = 0
        for (let n of arr1) {
            sum += n
        }
        arr1 = sum
    }
}
magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])