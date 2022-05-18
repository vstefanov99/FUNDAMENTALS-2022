function asd(input) {
    input = input.toString()
    let arr = []
    for (let i = 0;i< input.length;i++) {
        arr.push(Number(input[i]))
    }   
    let evenNums = getEven(arr)
    console.log(evenNums)
}
asd(1000435)