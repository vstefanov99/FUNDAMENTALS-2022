function asd(input) {
    let rawKey = input.shift()
    let command = input.shift()
    while (command !== 'Generate') {
        let [action,token1,token2,token3] = command.split('>>>')
        if (action == 'Contains') {
            if (rawKey.includes(token1)) {
                console.log(`${rawKey} contains ${token1}`)
            } else {
                console.log(`Substring not found!`)
            }
        } else if (action == 'Flip') {
            if (token1 == 'Upper') {
                let firstHalf = rawKey.substring(0,token2)
                let toChange = rawKey.substring(token2,token3)
                let secondHalf = rawKey.substring(token3,rawKey.length)
                toChange = toChange.toUpperCase()
                rawKey = firstHalf + toChange + secondHalf
                console.log(rawKey)
            } else if (token1 == 'Lower') {
                let firstHalf = rawKey.substring(0,token2)
                let toChange = rawKey.substring(token2,token3)
                let secondHalf = rawKey.substring(token3,rawKey.length)
                toChange = toChange.toLowerCase()
                rawKey = firstHalf + toChange + secondHalf
                console.log(rawKey)
            } 
        } else if (action == 'Slice') {
            let toDelete = rawKey.substring(token1,token2)
            rawKey = rawKey.replace(toDelete,'')
            console.log(rawKey)
        } 
        command = input.shift()
    }
    console.log(`Your activation key is: ${rawKey}`)
}
asd(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])