function asd(arr) {
    let newArr = []
    for (let el of arr) {
        if(!newArr.includes(el)) {
            newArr.push(el)
        }
    }
    console.log(newArr.join(' '))
}
asd([7, 8, 9, 7, 2, 3, 4, 1, 2])