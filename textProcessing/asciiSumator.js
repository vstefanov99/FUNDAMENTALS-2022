function asd(input) {
    let startCode = input[0].charCodeAt(0)
    let endCode = input[1].charCodeAt(0)
    let sum = 0
    for (let c of input[2]) {
        let currentChar = c.charCodeAt(0)
        if (currentChar > startCode && currentChar < endCode) {
            sum += currentChar
        } else if (currentChar > endCode && currentChar < startCode) {
            sum += currentChar
        }
    }
    console.log(sum)
}
asd([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]
)