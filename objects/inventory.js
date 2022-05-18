function asd(input) {
    class Hero {
        constructor(heroName,level,items) {
            this.heroName = heroName
            this.level = level
            this.items = items
        }
    }
    let originalArr = input
    let sortedByLevel = []
    for (let index in originalArr) {
        originalArr[index] = originalArr[index].split(" / ")
        let currentItems = originalArr[index][2].split(', ')
        let sortedItems = [] 
        sortedItems = currentItems.sort((a,b) => a.localeCompare(b))
        originalArr[index][2] = sortedItems.join(', ')
        
    }
    sortedByLevel = originalArr.sort((a,b) => a[1] - b[1])
    let heroObjArr = []
    sortedByLevel.forEach(line => {
        let [name,level,items] = [...line]
        
        heroObjArr.push(new Hero(name,level,items))
    })
    heroObjArr.forEach(hero => {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    })
}
asd([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])