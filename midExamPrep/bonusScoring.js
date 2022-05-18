function asd(arr) {
    let studentsCount = arr.shift()
    let lecturesCount = Number(arr.shift())
    let additionalBonus = Number(arr.shift())
    let arrToBonus = arr

    let afterBonus = arrToBonus.map(student => {
        student = Number(student)
        return Number((student / lecturesCount) * (5 + additionalBonus))
    })

    afterBonus.sort((a, b) => b - a)
    arr.sort((a, b) => b - a)
    if (studentsCount <= 0) {
        console.log(`Max Bonus: 0.`)
        console.log(`The student has attended 0 lectures.`)

    } else {
        console.log(`Max Bonus: ${Math.ceil(afterBonus[0])}.`)
        console.log(`The student has attended ${Math.ceil(arr[0])} lectures.`)

    }
}
asd([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])