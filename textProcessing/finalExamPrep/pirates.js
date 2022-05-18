function asd(input) {
    let command = input.shift()
    let targetCities = []
    while (command != 'Sail') {
        let [cityName,population,gold] = command.split('||')

        population = Number(population)
        gold = Number(gold)
        if (!targetCities.hasOwnProperty(cityName)) {
            targetCities[cityName] = {population,gold}
        } else {
            targetCities[cityName].population += population
            targetCities[cityName].gold += gold
        }
        command = input.shift()
    }
    command = input.shift()
    while (command != 'End') {
        let [action,townName,token1,token2] = command.split('=>')
        token1 = Number(token1)
        token2 = Number(token2)
        if (action == 'Plunder') {
            targetCities[townName].population -= token1
            targetCities[townName].gold -= token2
            console.log(`${townName} plundered! ${token2} gold stolen, ${token1} citizens killed.`)
            if (targetCities[townName].gold <= 0 || targetCities[townName].population <= 0) {
                console.log(`${townName} has been wiped off the map!`)
                delete targetCities[townName]
            }
        } else if (action == 'Prosper') {
            token1 = Number(token1)
            if (token1 < 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                targetCities[townName].gold += token1
                console.log(`${token1} gold added to the city treasury. ${townName} now has ${targetCities[townName].gold} gold.`)
            }
        }

        command = input.shift()
    }
    if (Object.keys(targetCities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(targetCities).length} wealthy settlements to go to:`)
        for (let city in targetCities) {
            console.log(`${city} -> Population: ${targetCities[city].population} citizens, Gold: ${targetCities[city].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
    

}
asd(["Nassau||95000||1000",
"Campeche||270000||690",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])