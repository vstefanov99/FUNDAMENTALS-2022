function asd(input) {
    input = input.split('')
    let output = []
    for (let i = 1; i < input.length + 1; i++) {
        let first = input[i - 1]
        let second = input[i]
        if (first !== second) {
            output.push(first)
        }
    }
    console.log(output.join(''))
}
asd('qqqwerqwecccwd')