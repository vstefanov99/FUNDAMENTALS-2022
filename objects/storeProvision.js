function asd(stockArr,orderArr) {
    let storeObj = {}
    let currentName = ''
    let currentQnt = 0
    for (let index in stockArr) {
        if(index % 2 == 0) {
            currentName = stockArr[index]
        } else {
            currentQnt = Number(stockArr[index])
        }
        storeObj[currentName] = currentQnt
    }
    for (let i = 0; i < orderArr.length;i+=2) {
        let currentName = orderArr[i]
        let currentQnt = Number(orderArr[i+1])
        if (storeObj[currentName] === undefined) {
            storeObj[currentName] = 0
        } 
        storeObj[currentName] += currentQnt
    } 
    for(let key in storeObj) {
        console.log(`${key} -> ${storeObj[key]}`)
    }
}
asd([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])