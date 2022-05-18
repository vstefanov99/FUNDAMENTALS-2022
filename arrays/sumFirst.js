function sum(n,k) {
    let output = [1]
    for (let i = 1;i < n;i++) {
        let currentSum = 0
        let start = Math.max(0, i - k)
        let end = i - 1
        for (let x = start;x <= end;x++) {
            currentSum += output[x]
        }

        output.push(currentSum)
    }
    console.log(output.join(' '))
}
sum(8,2)