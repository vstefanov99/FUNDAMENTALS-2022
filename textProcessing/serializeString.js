function asd(string) {
    string = string[0]
    let charsObj = {}
    for (let index in string) {
        let currentChar = string[index]
        if (charsObj[currentChar]) {
            charsObj[currentChar].push(Number(index))
        } else {
            charsObj[currentChar] = []
            charsObj[currentChar].push(Number(index))
        }
    }
    for (let key in charsObj) {
        console.log(`${key}:${charsObj[key].join('/')}`)

    }
}
asd(['avjavamsdmcalsdm'])