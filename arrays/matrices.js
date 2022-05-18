function matrices(input) {

    let isMagic = true
    let magicConstant = 0
    for (row of input) {
        for (x of row) {
            magicConstant += x
            break
        }
    }
    for (row of input) {
        let currentRowSum = row.reduce((a, b) => a + b, 0)
        if (currentRowSum != magicConstant) {
            isMagic = false
            break
        }
        
    }
    for (let i = 0;i < input.length;i++) {
        let currentColSum = 0 
        for (let j = 0;j <input[i].length;j++) {
            currentColSum += input[j][i] 
            
        }
        if (currentColSum != magicConstant) {
            isMagic = false
            break
        }
    }
    console.log(isMagic)
}
matrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])