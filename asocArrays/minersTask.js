function asd(input) {
    let inventory = {}
    for (let i = 0;i < input.length;i+=2) {
        let item = input[i]
        let quantity = Number(input[i + 1])
        if (!inventory.hasOwnProperty(item)) {
            inventory[item] = quantity
        } else {
            let oldQnt = inventory[item]
            inventory[item] = oldQnt + quantity 
        }
    }
    for (let x in inventory) {
        console.log(`${x} -> ${inventory[x]}`)
    }
}
asd([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])