function asd(input) {
    let key = (input.shift().split(' ').map(x => Number(x)))
    let decoded = []
    let command = input.shift() 
    while (command !== 'find') {
        command = command.split('')
        let keyCounter = 0
        let newString = ''
        for (let char of command) {
            let currentCode = char.charCodeAt(0)
            currentCode -= key[keyCounter]
            let newChar = String.fromCharCode(currentCode)
            newString += newChar
        
            keyCounter ++ 
            if (keyCounter > key.length - 1) {
                keyCounter = 0
            }
        }
        decoded.push(newString)
        command = input.shift()
    }
    for (let line of decoded) {
        line = line.split('&')
        let treasure = line[1]
        let coordinates = line[2].split('<')[1].split('>')[0] 
        console.log(`Found ${treasure} at ${coordinates}`)
    }
}
asd([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
  ]
  )