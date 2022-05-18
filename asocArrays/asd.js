function asd(input) {
    let students = new Map
    for (let line of input) {
        let tokens = line.split(' ') 
        let name = tokens[0]
        let grades = tokens.splice(1,tokens.length).map(Number)

        if (students.has(name)) {
            students.set(name, students.get(name).concat(grades))
        } else {
            students.set(name, [])
            students.set(name,students.get(name).concat(grades))
        }
    }
    function average(a,b) {
        let aSum = 0
        let bSum = 0
        for (let i = 0;i < a[1].length;i++) {
            aSum += a[1][i]
        }
        
        for (let i = 0;i < b[1].length;i++) {
            bSum += b[1][i]
        }
        return (aSum / a[1].length) - (bSum / b[1].length) 
    }
    let sorted = Array.from(students).sort((a,b) => average(a,b))
    for (let x of sorted){
        console.log(`${x[0]}: ${x[1].join(',')}`)
    }
}
asd(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])