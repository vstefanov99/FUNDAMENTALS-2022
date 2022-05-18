function asd(arr) {
    let originalSum = 0
    let newSum = 0 
    let newArr = []
    for(let i = 0;i <= arr.length - 1;i++) {
        originalSum += arr[i]
        let newNum = 0
        if (arr[i] % 2 == 0) {
            newNum = arr[i] + i
            newArr.push(newNum)
        } else {
            newNum = arr[i] - i
            newArr.push(newNum)
            
        }
        newSum += newNum
    }
    console.log(newArr)
    console.log(originalSum)
    console.log(newSum)
}
asd([5,15,23,56,35])