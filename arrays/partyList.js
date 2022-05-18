function party(arr1) {
    let output = []
    for (let el of arr1) {
        let [name, command] = el
            .split(' is ')
        if (command == "going!") {
            if (output.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                output.push(name)
            }
        } else if (command == "not going!") {
            if (output.includes(name)) {
                for (let i = 0;i < output.length;i++) {
                    if (output[i] == name) {
                        output.splice(i,1)
                    }
                }
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(output.join('\n'))
}
party(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])