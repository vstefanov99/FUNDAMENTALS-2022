function equal(arr) {
    let isEqual = 'no'
        
    for (let i = 0;i < arr.length;i++) {
        let rightSum = 0
        let leftSum = 0
        let currentIndex = i
        for(let l = i - 1;l >= 0;l--) {
            leftSum += arr[l]
        } 
        for (let r = i + 1;r < arr.length;r++) {
            rightSum += arr[r]
        }
        if (rightSum == leftSum) {
            isEqual = i

        }
    }
    console.log(isEqual)
}
equal([1])