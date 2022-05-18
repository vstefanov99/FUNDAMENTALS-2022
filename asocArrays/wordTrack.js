function asd(input) {
    let wordsToSearch = input.shift().split(' ')
    let foundWords = {}
    for (let word of wordsToSearch) {
        for (let i of input) {
            if (i === word) {
                if (foundWords[word]) {
                    foundWords[word] += 1
                } else {
                    foundWords[word] = 1
                }
            }
        }
    }

    
    let sorted = Object.entries(foundWords).sort((a,b) => b[1] - a[1])
    for (let line of sorted) {
        console.log(`${line[0]} - ${line[1]}`)
    }
}
asd([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])