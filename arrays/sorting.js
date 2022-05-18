function sorting(arr) {
    let outputArr = []
    for (let index in arr) {
        let biggest = Math.max(...arr)
        outputArr.push(biggest)
        arr.splice(index,1)
    }
    console.log(outputArr)
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])