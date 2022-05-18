function asd(input1,input2) {
    let arr1 = input1.split(', ')
    let arr2 = input2.split(' ')
    for (let x of arr1) {
        for (let index in arr2) {
            let word = arr2[index]
            if (word.includes('*') && word.length == x.length) {
                word = x
                arr2[index] = word
            }
    
        }
    }
    
    console.log(arr2.join(' '))
}
asd('great, learning',
'softuni is ***** place for ******** new programming languages')