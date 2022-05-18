function asd(word,text) {
    text = text.split(' ').map(word => word.toLowerCase())
    let isFound = false
    for (let w of text) {
        if (w == word) {
            isFound = true
        } 
    }
    if (isFound) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}

asd('ajavascript',
'JavaScript is the best programming language')