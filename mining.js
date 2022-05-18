function mining(input) {
    let days = input.length
    let searchFirstDay = input
    let moneySaved = 0
    let bitcoinCount = 0
    let firstDay = 0
    for (let x = 0;x < days;x++) {
        let todayGold = Number(input[x])
        if ((x + 1) % 3 == 0) {
            todayGold *= 0.7
        }
        let todayMoney = todayGold  * 67.51 
        moneySaved += todayMoney
        if (moneySaved >= 11949.16) {
            let bitcoinAmount = Math.floor(moneySaved / 11949.16)
            moneySaved -= 11949.16 * bitcoinAmount
            bitcoinCount += bitcoinAmount
            if (bitcoinCount > 0) {
                searchFirstDay[x] = "x"
            }
        }
        

    }
    let counter = 0
    while(counter < searchFirstDay.length) {
        if (searchFirstDay[counter] == "x") {
            firstDay = counter + 1
            break
        }
        counter++
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`)    
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${moneySaved.toFixed(2)} lv.`)
}
mining([50,100])