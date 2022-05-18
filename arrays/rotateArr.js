function rotate(arr,n) {
    for (let i = 0;i < n;i++) {
        let x = arr.shift()
        arr.push(x)
    }
    console.log(arr.join(' '))
}
rotate([51, 47, 32, 61, 21], 2)