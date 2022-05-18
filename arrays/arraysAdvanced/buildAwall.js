function asd(input) {
    let totalHeight = input.reduce((a, b) => a + b, 0)
    let newArr = []
    for (let i = 0; i < totalHeight; i++) {
        newArr = input.map(a => a + 1)
        console.log(newArr)
    }

}
asd([21, 25, 28])