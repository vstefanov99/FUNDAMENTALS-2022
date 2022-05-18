function asd(input) {
    let concealedMessage = input.shift()
    let commandLine = input.shift()
    while (commandLine !== 'Reveal') {
        let [command, t1, t2] = commandLine.split(':|:')
        if (command == 'InsertSpace') {
            let newString = concealedMessage.substring(0, t1) + ' ' + concealedMessage.substring(t1)
            concealedMessage = newString
            console.log(concealedMessage)

        } else if (command == 'Reverse') {
            if (concealedMessage.includes(t1)) {
                let indexOfSub = concealedMessage.indexOf(t1)
                let strToReverse = concealedMessage.substring(indexOfSub)

                let reversedStr = []
                strToReverse.split('')
                for (let x of strToReverse) {
                    reversedStr.unshift(x)
                }
                reversedStr = reversedStr.join('')
                concealedMessage = concealedMessage.replace(strToReverse, reversedStr)

                console.log(concealedMessage)
            } else {
                console.log(`error`)
            }

        } else if (command == 'ChangeAll') {
            while (concealedMessage.includes(t1)) {
                concealedMessage = concealedMessage.replace(t1, t2)
            }
            console.log(concealedMessage)
        }
        commandLine = input.shift()
    }
    console.log(`You have a new text message: ${concealedMessage}`)

}
asd([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])