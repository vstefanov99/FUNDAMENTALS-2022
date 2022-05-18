function asd(input) {
    let playersObj = {}
    for (let line of input) {
        let [playerName, currentHand] = line.split(": ")
        currentHand = currentHand.split(', ')
        if (playersObj[playerName]) {
            let newHand = new Set(playersObj[playerName].concat(currentHand))
            playersObj[playerName] = newHand
        } else {
            playersObj[playerName] = currentHand

        }
    }
    for (let player in playersObj) {
        let totalPoints = 0
        for (let hand of playersObj[player]) {
            let multiplier = 0

            

            if (hand[1] == "S" || hand[2] == "S") {
                multiplier = 4
            } else if (hand[1] == "H" || hand[2] == "H") {
                multiplier = 3
            } else if (hand[1] == "D" || hand[2] == "D") {
                multiplier = 2
            } else if (hand[1] == "C" || hand[2] == "C") {
                multiplier = 1
            }

            if (hand[0] == "J") {
                totalPoints += 11 * multiplier
            } else if (hand[0] == "Q") {
                totalPoints += 12 * multiplier
            } else if (hand[0] == "K") {
                totalPoints += 13 * multiplier
            } else if (hand[0] == "A") {
                totalPoints += 14 * multiplier
            } else if (hand[0] == 1) {
                totalPoints += 10 * multiplier
            } else {
                totalPoints += Number(hand[0]) * multiplier
            }
        }
        console.log(`${player}: ${totalPoints}`)
    }
    
}
asd([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])