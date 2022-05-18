function asd(input) {
    let gladiatorsObj = {}
    for (let line of input) {
        if (line === "Ave Cesar") {
            break
        }
        let lineArr = line.split(' ')
        if (lineArr.length == 5) {
          add(lineArr)
        } else if (lineArr.length == 3) {
            
        }
    }
    function add(el) {
        el = el.join(' ')
        let [gladiatorName,techniqueName,skillPower] = el.split(' -> ')
        skillPower = Number(skillPower)

        if (!gladiatorsObj.hasOwnProperty(gladiatorName)) {
            gladiatorsObj[gladiatorName] = {}
            gladiatorsObj[gladiatorName][techniqueName] = skillPower
        } else {
            if (!gladiatorsObj[gladiatorName].hasOwnProperty(techniqueName)) {
                gladiatorsObj[gladiatorName][techniqueName] = skillPower

            } else {
                let oldPower = gladiatorsObj[gladiatorName][techniqueName]
                if (skillPower > oldPower) {
                    gladiatorsObj[gladiatorName][techniqueName] = skillPower
                }
            }
        }
    }   
    console.log(gladiatorsObj)
    for (let gladiator in gladiatorsObj) {
        let totalSkill = gladiatorsObj[gladiator]
        for (let skill in totalSkill) {
            console.log(skill)
        }
        // console.log(totalSkill)
        gladiator[totalSkill] = 100
    }
}
asd([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ])