function asd(input) {
    let companiesObj = {}
    for (const line of input) {

        let [companyName, currentID] = line.split(" -> ")

        if (!companiesObj.hasOwnProperty(companyName)) {
            companiesObj[companyName] = []
        }

        companiesObj[companyName].push(currentID)
    }
    let sorted = Object.entries(companiesObj).sort((a, b) => a[0].localeCompare(b[0]))
    for (let company of sorted) {
        console.log(company[0])
        let set = new Set(company[1])
        for (let n of set) {
            console.log(`-- ${n}`)
        }
    }
}
asd([
    'SoftUni -> AA12345',
    'SoftUni -> AA12345',

    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])