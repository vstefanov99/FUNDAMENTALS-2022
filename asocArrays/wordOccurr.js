function asd(input) {
    let count = new Map
    for (let word of input) {
        if (count.has(word)) {
            let times = count.get(word)
            times ++
            count.set(word ,times)
        } else {
            count.set(word,1)
        }
    }
    let sorted = Array.from(count.entries()).sort((a,b) => b[1] - a[1])
    sorted.forEach(x => {
        console.log(`${x[0]} -> ${x[1]} times`)
    })
    

}
asd(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
])