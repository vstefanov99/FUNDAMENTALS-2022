function asd(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(x => Number(x))
    for (let line of input) {
        [command, x, y] = line.split(' ')
        if (command == "Add") {
            arr.push(Number(x))
        } else if (command == "Remove") {
            for (let index in arr) {
                if (index == x) {
                    arr.splice(index,1)
                }
            }
        } else if (command == "RemoveAt") {
            arr.splice(x,1)
        } else if (command == "Insert") {
            arr.splice(y,0,Number(x))
        }
    }
    console.log(arr.join(' '))
}
asd(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])