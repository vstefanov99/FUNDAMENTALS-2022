function asd(input) {
    let carsCount = input.shift()
    let carsObj = {}

    for (let i = 0;i < carsCount;i++) {
        let currentCar = input.shift()
        let [carName,mileage,fuel] = currentCar.split('|')
        mileage = Number(mileage) 
        fuel = Number(fuel)
        carsObj[carName] = {mileage,fuel}
    }
    
    let command = input.shift()
    while (command !== 'Stop') {
        command = command.split(' : ')
        if (command[0] == 'Drive') {
            let [commandX,carN,distance,fuelNeeded] = command
            distance = Number(distance)
            fuelNeeded = Number(fuelNeeded)
            if (carsObj[carN].fuel >= fuelNeeded) {
                carsObj[carN].fuel -= fuelNeeded
                carsObj[carN].mileage += distance
                console.log(`${carN} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
            } else {
                console.log(`Not enough fuel to make that ride`)
            }
            if (carsObj[carN].mileage >= 100000) {
                delete carsObj[carN]
                console.log(`Time to sell the ${carN}!`)
            }
        } else if (command[0] == 'Refuel') {
            let [commandX,carN,fuelQnt] = command
            fuelQnt = Number(fuelQnt)
            let fuelBefore = carsObj[carN].fuel
            let max = 75
            let refilled = fuelQnt
            carsObj[carN].fuel += fuelQnt
            if (carsObj[carN].fuel > 75) {
                carsObj[carN].fuel = 75
                refilled = max - fuelBefore 
            } 
            console.log(`${carN} refueled with ${refilled} liters`)

        } else if (command[0] == 'Revert') {
            let [commandX,carN,kilometersToDecrease] = command
            kilometersToDecrease = Number(kilometersToDecrease)
            carsObj[carN].mileage -= kilometersToDecrease
            if (carsObj[carN].mileage < 10000) {
                carsObj[carN].mileage = 10000
            } else {
                console.log(`${carN} mileage decreased by ${kilometersToDecrease} kilometers`)
            }
        }
        command = input.shift()
    }
    for (let car in carsObj) {
        console.log(`${car} -> Mileage: ${carsObj[car].mileage} kms, Fuel in the tank: ${carsObj[car].fuel} lt.`)
    }
}
asd([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])