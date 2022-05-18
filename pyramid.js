function pyramid(baseSize,increment) {
    let stoneTotal = 0
    let marbleTotal = 0
    let lapisTotal = 0
    let goldTotal = 0
    let stepCount = 0
    while (baseSize > 0) {
        stepCount++
        if (baseSize == 1) {
            goldTotal += 1 * increment
            baseSize -= 2
        } else if (baseSize == 2) {
            goldTotal += 4 * increment 
            baseSize -= 2

        } else if (stepCount % 5 == 0) {
            let currentStone = ((baseSize - 2) * (baseSize - 2))  
            let currentLapis = ((baseSize * baseSize) - currentStone ) 
            currentLapis *= increment
            currentStone *= increment
            lapisTotal += currentLapis
            stoneTotal += currentStone
            baseSize -= 2
            
        } else {
            let currentStone = (baseSize - 2) * (baseSize - 2)
            let currentMarble = ((baseSize * baseSize) - currentStone)  
            currentMarble *= increment
            currentStone *= increment
            marbleTotal += currentMarble
            stoneTotal += currentStone
            baseSize -= 2

        }
    }
    stepCount *= increment
    console.log(`Stone required: ${Math.ceil(stoneTotal)}`)
    console.log(`Marble required: ${Math.ceil(marbleTotal)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`)
    console.log(`Gold required: ${Math.ceil(goldTotal)}`)
    console.log(`Final pyramid height: ${Math.floor(stepCount)}`)

}
pyramid(23, 0.5)