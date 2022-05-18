function asd(arr) {
    let newArr = []
    for (index in arr) {
        if (index % 2 != 0) {
            newArr.unshift((arr[index]) * 2)
        }
    }
    console.log(newArr.join(' '))
}
asd([10, 15, 20, 25])