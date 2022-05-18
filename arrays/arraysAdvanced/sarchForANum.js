function asd(arr1,arr2) {

    [takeCount,deleteCount,targetToSearch] = arr2
    let newArr = arr1.splice(0,takeCount)
    newArr.splice(0,deleteCount)
    let timesIncluded = 0
    for (let el of newArr) {
        if (el == targetToSearch) {
            timesIncluded++
        }
    }
    console.log(`Number ${targetToSearch} occurs ${timesIncluded} times.`)
}
asd([5, 2, 3, 4, 1, 6],
    [5, 2, 3])