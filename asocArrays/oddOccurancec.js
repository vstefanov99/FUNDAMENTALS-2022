function asd(input) {
    let arr = input.split(' ')
    let wordsObj = new Map
    arr.forEach(x => {
        x = x.toLowerCase()
        if (wordsObj.has(x)) {
            let value = wordsObj.get(x)
            wordsObj.set(x , value + 1)
        } else {
            wordsObj.set(x, 1)
        }
    })
    let toPrint = ''
    for (let key of wordsObj) {
        if (key[1] % 2 != 0) {
            toPrint += key[0] + ' '

        }
    }
    console.log(toPrint)
    
}
asd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')