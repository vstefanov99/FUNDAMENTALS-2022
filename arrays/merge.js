function merge(arr1,arr2) {
    let arr3 = []
    for (let i = 0;i <= arr1.length - 1;i++) {
        if (i % 2 == 0) {
            let sum = Number(arr1[i]) + Number(arr2[i])
            arr3.push(sum)
        } else {
            let concat = arr1[i] + arr2[i]
            arr3.push(concat)
        }
    }
    console.log(arr3.join(' - '))
}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])