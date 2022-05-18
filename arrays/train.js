function train(arr) {
    let waggons = arr
        .shift()
        .split(' ')
        .map(Number)
    let waggonMaxCap = Number(arr.shift())

    for (let el of arr) {
        let [command, qnt] = el
            .split(' ') 
        
        if (command == "Add") {
            waggons.push(Number(qnt))
            
        } else {
            command = Number(command)
            for (let i in waggons) {
                let waggon = Number(waggons[i])
                if ((command + waggon) <= waggonMaxCap) {
                    waggon += command
                    waggons[i] = waggon
                    break
                }
            }
        }
    }
    console.log(waggons.join(' '))
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])