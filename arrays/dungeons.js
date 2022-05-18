function dungeons(input) {
    let health = 100
    let coins = 0
    let isDead = false
    let arr = input[0]
    let allRooms = arr.split('|')
    let roomCount = 0
    for (let room of allRooms) {
        
        let currentRoom = room.split(" ")
        roomCount ++
        if (currentRoom[0] == 'potion') {
            let initialHealth = health

            health += Number(currentRoom[1]) 
            if (health > 100) {
                health = 100
            }
            let healAmount = health - initialHealth 
            console.log(`You healed for ${healAmount} hp.`)
            console.log(`Current health: ${health} hp.`)
            
        } else if (currentRoom[0] == 'chest') {
            coins += Number(currentRoom[1])
            console.log(`You found ${Number(currentRoom[1])} coins.`)
        } else {
            health -= currentRoom[1]
            if (health > 0) {
                console.log(`You slayed ${currentRoom[0]}.`)
            } else {
                console.log(`You died! Killed by ${currentRoom[0]}.`)
                console.log(`Best room: ${roomCount}`)
                isDead = true
                break
            }

        }
    }
    if (!isDead) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
dungeons(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])