function asd(input) {

    let objArr = []
    for (let line of input) {
        let [name,lat,long] = line.split(' | ')
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)
        let newObj = {
            town:name,
            latitude:lat,
            longitude:long
        }
        console.log(newObj)

    }
    objArr.forEach(l => {
        console.log(l)
    })

}
asd(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)