function asd(input) {
    let arr = input.split('|')
    let initialHealth = 100
    let initialBitcoins = 0
    let roomCount = 0
    let isDead = false
    for (let line of arr) {
        roomCount ++
        let [command,amount] = line.split(' ')
        amount = Number(amount)
        if (command === "potion") {
            let neededHealAmount = 100 - initialHealth
            initialHealth += amount
            if (initialHealth >= 100) {
                console.log(`You healed for ${neededHealAmount} hp.`)
                initialHealth = 100 
                console.log(`Current health: ${initialHealth} hp.`)
            } else {
                console.log(`You healed for ${amount} hp.`)
                console.log(`Current health: ${initialHealth} hp.`)
                
            }
        } else if (command === "chest") {
            initialBitcoins += amount
            console.log(`You found ${amount} bitcoins.`)
        } else {
            initialHealth -= amount
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${roomCount}`)
                isDead = true
                break
            }
        }
    }
    if(!isDead) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${initialBitcoins}`)
        console.log(`Health: ${initialHealth}`)
    }
}
asd("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")