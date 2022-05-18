function distinct(arr) {
    let output = []
    for (let e of arr) {
        if (!output.includes(e)) {
            output.push(e)
        }
    }
    console.log(output.join(' '))
}
distinct([20, 8, 12, 13, 4, 4, 8, 5])