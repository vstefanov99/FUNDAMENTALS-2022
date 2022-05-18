function diagonal(arr) {
    let sum1 = 0
    let sum2 = 0
    let count = 0
    let count2 = arr.length - 1
    for (let row of arr) {
        let arrX = row.split(' ')
        for (let c = 0; c < arr.length; c++) {
            if (c == count) {
                sum1 += Number(arrX[c])
            }
        }
        for (let x = arr.length - 1; x >= 0; x--) {
            if (x == count2) {
                sum2 += Number(arrX[x])
            }
        }
        count2--
        count++

    }
    let isEqual = false
    if (sum1 == sum2) {
        isEqual = true
    }
    count = 0
    count2 = arr.length - 1
    let newArr = []
    if (isEqual) {
        for (let row of arr) {
            let arrX = row.split(' ')
            let arrY = row.split(' ')
            for (let c = 0; c < arr.length; c++) {
                let current = Number(arrX[c])
                if (c != count) {
                    arrX[c] = sum1
                    
                }
            }
            for (let x = arr.length - 1; x >= 0; x--) {
                let current = Number(arrY[x])

                if (x == count2) {
                    arrX[x] = current 
                }
            }
            newArr.push(arrX)
            count2--
            count++

        }
        for (let row of newArr) {
            console.log(row.join(' '))
        }
    } else {
        for (let row of arr) {
            console.log(row)
        }
    }
}
diagonal(['1 1 1',
'1 1 1',
'1 1 0'])