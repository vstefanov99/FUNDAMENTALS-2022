function sorting(inputArr) {
    let length = inputArr.length
    let smallestArr = []
    let biggestArr = []
    let output = []
    let sortedAsc = inputArr.sort((a,b) => a - b)
    smallestArr = sortedAsc.splice(0,sortedAsc.length / 2)
    biggestArr = sortedAsc.reverse()
    for (let i = 0;i < length / 2;i++) {
        output.push(biggestArr[i])
        output.push(smallestArr[i])
    }
    console.log(output.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])