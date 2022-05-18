function asd(input) {
    let arr = input.split(' ').filter(x => x.length > 0)
    let sumResults = 0
    for (let line of arr) {
        line = line.split('')
        let firstLetter = line.shift()
        let lastLetter = line.pop()
        let firstCode = firstLetter.charCodeAt(0)
        let lastCode = lastLetter.charCodeAt(0)
        line = Number(line.join(''))
        if (firstCode > 64 && firstCode < 91) {
            line /= firstCode - 64
        } else if (firstCode > 96 && firstCode < 123) {
            line *= firstCode - 96
        }

        if (lastCode > 64 && lastCode < 91) {
            line -= lastCode - 64 
        } else if (lastCode > 96 && lastCode < 123) {
            line += lastCode - 96
        }
        sumResults += line
    }
    console.log(sumResults.toFixed(2))
}
asd('A12b s17G')