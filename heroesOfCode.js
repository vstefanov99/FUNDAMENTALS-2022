function asd(input) {
    let heroesCount = input.shift()
    let heroesObj = {}    
    
    for (let i = 0;i < heroesCount;i++) {
        let [name,hp,mp] = input[i].split(' ')
        heroesObj[name] = {'health':Number(hp),'mana':Number(mp)}
    }
    
    let commandLine = input.shift()
    while (commandLine != 'End') {
        commandLine = commandLine.split(' - ')
        if (commandLine[0] == 'CastSpell') {
            let [command,heroName,mpNeeded,spellName] = commandLine

            if (heroesObj.hasOwnProperty(heroName) && heroesObj[heroName].mana >= Number(mpNeeded)) {
                heroesObj[heroName].mana -= Number(mpNeeded)
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].mana} MP!`)
            } else if (heroesObj.hasOwnProperty(heroName) && heroesObj[heroName].mana < Number(mpNeeded)) {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }

            
        } else if (commandLine[0] == 'TakeDamage') {
            let [command,heroName,damage,attacker] = commandLine
            heroesObj[heroName].health -= Number(damage)
            if (heroesObj[heroName].health > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[heroName].health} HP left!`)
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroesObj[heroName] 
            }
        } else if (commandLine[0] == 'Recharge') {
            let [command,heroName,amount] = commandLine
            let startMp = Number(heroesObj[heroName].mana)

            heroesObj[heroName].mana += Number(amount)
            if (heroesObj[heroName].mana > 200) {
                heroesObj[heroName].mana = 200
                amount = 200 - startMp
            }
            console.log(`${heroName} recharged for ${amount} MP!`)
        } else if (commandLine[0] == 'Heal') {
            let [command,heroName,amount] = commandLine
            let startHp = Number(heroesObj[heroName].health)

            heroesObj[heroName].health += Number(amount)
            if (heroesObj[heroName].health > 100) {
                heroesObj[heroName].health = 100
                amount = 100 - startHp
            }
            console.log(`${heroName} healed for ${amount} HP!`)

        }
        commandLine = input.shift()
    }
    for (let hero in heroesObj) {
        console.log(hero)
        console.log(`  HP: ${heroesObj[hero].health}`)
        console.log(`  MP: ${heroesObj[hero].mana}`)

    }
}
asd([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])