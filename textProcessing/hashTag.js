function asd(input) {
    let asd = input.split(' ')
    let words = []
    let validWords = []
    let isValid = false
    for (let word of asd) {
        if (word[0] == '#' && word.length > 1) {
            let newWord = word.substring(1,word.length)
            words.push(newWord)
            
        }
    }
    for (let word of words) {
        for (let i = 0;i < word.length;i++) {
            let currentChar = word.charCodeAt(i) 
            if (currentChar > 64 && currentChar < 91 || currentChar > 96 && currentChar < 123) {
                isValid = true
            } else {
                isValid = false
                break
            }
        }
        if (isValid) {
            validWords.push(word)
        }
    }
    
    validWords.forEach(w => console.log(w))
}
asd('Nowadays everyone uses # to tag a #special word in #socialMedia')