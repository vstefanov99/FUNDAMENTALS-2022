function asd(input) {
    let allFlights = input[0] 
    let changedStatuses = input[1]
    let statusToCheck = input[2]
    let flightsObj = {}
    
    allFlights.forEach(line => {
        let [numberFly, destination] = line.split(' ')
        flightsObj[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    console.log(flightsObj)
}
asd([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])