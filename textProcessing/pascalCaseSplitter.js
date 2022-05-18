function asd(input) {
    let indicesOfCapitalLetters = []
    let output = []
    for (let c = 0; c < input.length; c++) {
        if (input.charCodeAt(c) > 64 && input.charCodeAt(c) < 91) {
            indicesOfCapitalLetters.push(c)
        }
    }
    for (let i in indicesOfCapitalLetters) {
        i = Number(i)
        let startIndex = indicesOfCapitalLetters[i]
        let endIndex = indicesOfCapitalLetters[i + 1]
        
        let newWord = input.substring(startIndex,endIndex)
        output.push(newWord)

        startIndex = endIndex
    }
    console.log(output.join(', '))
}
    asd('SplitMeIfYouCanHaHaYouCantOrYouCan')