function sequence(arr) {
    let sequence = []
    for (let i = 0;i < arr.length;i++) {
        if(arr[i] == arr[i+1]) {
            console.log(arr[i])
        }
        
    }
    console.log(sequence)
}
sequence([2, 1, 1, 2, 3, 3, 2111, 2, 2, 1])