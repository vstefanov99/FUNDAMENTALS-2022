function asd(input) {
    let locations = input.shift()
    let command = input.shift()
    while (command !== 'Travel') {
        let [c,token1,token2] = command.split(':')
        if (c == 'Add Stop') {
            let firstHalf = locations.substring(0,token1)
            let secondHalf = locations.substring(token1)
            locations = firstHalf + token2 + secondHalf
            console.log(locations)
        } else if (c == 'Remove Stop') {
            token1 = Number(token1)
            token2 = Number(token2) + 1
            let toRemove = locations.substring(token1,token2)
            locations = locations.replace(toRemove,'')
            console.log(locations)
        } else if (c == 'Switch') {
            if (locations.includes(token1)) {
                while (locations.includes(token1)) {
                    locations = locations.replace(token1,token2)
                    console.log(locations)
                }
            } else {
                console.log(locations)
            }
        }
        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${locations}`)
}
asd(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'
    ])