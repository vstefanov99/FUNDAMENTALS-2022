function asd(input,bomb) {
    [bombNum,bombPower] = bomb
    for (let index in input) {

        if (input[index] == bombNum) {
            let elementsToRemove = bombPower * 2 + 1
            let startIndex = index - bombPower
            if (startIndex < 0) {
                elementsToRemove += startIndex
                startIndex = 0
            }
            input.splice(startIndex,elementsToRemove)
        }
    }
    console.log(input.reduce((a,b) => a + b, 0))
}
asd([1, 7, 7, 1, 2, 3],
    [7, 1])