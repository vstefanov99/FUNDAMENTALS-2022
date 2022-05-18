function asd(input) {
    let concatenated = input[0] + input[1]
    concatenated = concatenated.split('')
    let key = input[2].split('').map(x => x.toUpperCase())
    let keyCount = 0
    for (let index in concatenated) {
        let currentChar = concatenated[index]
        let currentReplacement = key[keyCount]
        if (currentChar == 'a' || currentChar == 'e' || currentChar == 'i' || currentChar == 'o' || currentChar == 'u') {
            concatenated[index] = currentReplacement
            keyCount++
            if (keyCount > key.length - 1) {
                keyCount = 0
            }
        }

    }
    let reversed = []
    for (let x of concatenated) {
        reversed.unshift(x)
    }
    console.log(`Your generated password is ${reversed.join('')}`)
}
asd([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]) 