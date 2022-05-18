function asd(input) {
    let count = Number(input.shift())
    let validBarcode = []

    function isAlphaNumeric(str) {
        var code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    }

    function startsEndsWithCapital(str) {
        let firstDigit = str[0]
        let lastDigit = str[str.length - 1]
        if (firstDigit.charCodeAt() > 64 && firstDigit.charCodeAt() < 91 && lastDigit.charCodeAt() > 64 && lastDigit.charCodeAt() < 91) {
            return true
        } else {
            return false
        }

    }
    function determineGroup(str) {
        let temp = str.split('')
        let group = ''
        temp.forEach(c => {
            c = Number(c)
            if (!isNaN(c)) {
                group += c
            }
        }) 
        if (group.length == 0) {
            return '00'
        } else {
            return group 
        }
    }

    for (let i = 0; i < count; i++) {
        let atStart = false
        let atEnd = false
        let validLength = false
        let validDigits = false
        let startsEndsCapital = false
        let currentBarcode = input[i]
        if (currentBarcode.includes('@#')) {
            currentBarcode = currentBarcode.replace('@#', '')
            atStart = true
        }
        if (currentBarcode.includes('@#')) {
            currentBarcode = currentBarcode.replace('@#', '')
            atEnd = true
        }
        while (currentBarcode.includes('#')) {
            currentBarcode = currentBarcode.replace('#', '')
        }

        while (currentBarcode.includes('@')) {
            currentBarcode = currentBarcode.replace('@', '')
        }


        validDigits = isAlphaNumeric(currentBarcode)
        startsEndsCapital = startsEndsWithCapital(currentBarcode)
        let currentGroup = determineGroup(currentBarcode)

        if (currentBarcode.length > 5) {
            validLength = true
        }

        if (atStart && atEnd && validDigits && validLength && startsEndsCapital) {
            console.log(`Product group: ${currentGroup}`)
        } else {
            console.log('Invalid barcode')
        }

    }
}
asd(((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])))