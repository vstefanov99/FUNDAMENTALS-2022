function asd(inputArr) {
    let numberArr = []
    let operandsArr = []

    for (let instruction of inputArr) {
        if (typeof (instruction) == "number") {
            numberArr.push(instruction)

        } else {
            let x = numberArr.pop()
            let y = numberArr.pop()

            if (instruction == "+") {
                numberArr.push(x + y)
            } else if (instruction == "-") {
                numberArr.push(y - x)
            } else if (instruction == "*") {
                numberArr.push(x * y)
            } else if (instruction == "/") {
                numberArr.push(y / x)
            }
        }
    }
    if (isNaN(numberArr[0])) {
        console.log(`Error: not enough operands!`)
    } else if (numberArr.length == 1) {
        console.log(numberArr[0])
    } else {
        console.log(`Error: too many operands!`)
    }

}
asd([5,
    3,
    4,
    '*',
    '-'])