function asd(input) {
    let parking = []
    let newParking = []
    for (let line of input) {
        let [direction,carNumber] = line.split(', ')
        if (direction == "IN" && !parking.includes(carNumber)) {
            parking.push(carNumber)
        } else if (direction == "OUT" && parking.includes(carNumber)) {
           parking = parking.filter(car => car !== carNumber)
        }
    }
    
    if (parking.length > 0) {
        parking.sort((a,b) => a.localeCompare(b)).forEach(x => {
            console.log(x)
        })
    } else {
        console.log('Parking Lot is Empty')
    }
}
asd(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])