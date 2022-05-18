function asd(input) {
    let n = input.shift()
    let plantsArr = []
    for (let i = 0; i < n; i++) {
        let [plantName, rarity] = input.shift().split('<->')
        rarity = Number(rarity)
        if (plantsArr.includes(plantName)) {

        } else {
            plantsArr[plantName] = {
                rarity,
                rating: []
            }
        }
    }
    let command = input.shift()
    while (command != 'Exhibition') {
        let [c, plantName, filler, token] = command.split(' ')

        if (plantsArr.hasOwnProperty(plantName)) {
            if (c == 'Rate:') {
                token = Number(token)
                plantsArr[plantName].rating.push(token)
            } else if (c == 'Update:') {
                token = Number(token)
                plantsArr[plantName].rarity = token
            } else if (c == 'Reset:') {
                plantsArr[plantName].rating = [0]
            } 
        } else {
            console.log('error')
        }
        
        

        command = input.shift()
    }
    console.log(`Plants for the exhibition:`)
    for (let plant in plantsArr) {
        let sum = plantsArr[plant].rating.reduce((a, b) => a + b, 0)
        let averageRating = (sum / plantsArr[plant].rating.length) || 0
        console.log(`- ${plant}; Rarity: ${plantsArr[plant].rarity}; Rating: ${averageRating.toFixed(2)}`)
    }
}
asd((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]))