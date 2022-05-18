function asd(arr) {
    let sorted = arr.sort()
    
    for (index in sorted) {
        let num = Number(index) + 1
        console.log(`${num}.${sorted[index]}`)
    }
        
}
asd(["Potatoes", "Tomatoes", "Onions", "Apples"])