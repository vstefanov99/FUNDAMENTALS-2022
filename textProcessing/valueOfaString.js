function asd(input) {
    if (input[1] == 'LOWERCASE') {
        let sum = 0
        for (let i = 0; i < input[0].length; i++) {
            let currentCode = input[0].charCodeAt(i) 
            if (currentCode > 96 && currentCode < 123) {
                sum += currentCode
            }
        }
        console.log(`The total sum is: ${sum}`)
    } else if (input[1] == 'UPPERCASE') {
        let sum = 0
        for (let i = 0; i < input[0].length; i++) {
            let currentCode = input[0].charCodeAt(i) 
            if (currentCode > 64 && currentCode < 91) {
                sum += currentCode
            }
        }
        console.log(`The total sum is: ${sum}`)
    }
}
asd(['HelloFromMyAwesomePROGRAM ',
    'LOWERCASE'
])