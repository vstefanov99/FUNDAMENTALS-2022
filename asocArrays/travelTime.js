function asd(input) {
    let countries = []
    for (let line of input) {
        let [country, town, cost] = line.split(" > ")
        let currTown = {
            name:town,
            cost:cost
        }
        countries.push({country,currTown})
    }
    console.log(countries[0].currTown.name)
}
asd([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])