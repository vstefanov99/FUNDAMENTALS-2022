function games(input) {
    let gamesLibrary = input
        .shift()
        .split(" ")
    let command = input.shift()

    while (command != "Play!") {
        [action, game] = command.split(' ')
        if (action == "Install") {
            if (!gamesLibrary.includes(game)) {
                gamesLibrary.push(game)
            }
        } else if (action == "Uninstall") {
            if (gamesLibrary.includes(game)) {
                let index = gamesLibrary.indexOf(game) 
                gamesLibrary.splice(index,1)
            }
            // for (x in gamesLibrary) {
            //     if (gamesLibrary[x] == game) {
            //         gamesLibrary.splice(x,1)
            //     }
            // }

        } else if (action == "Update") {
            for (x in gamesLibrary) {
                if (gamesLibrary[x] == game) {
                    gamesLibrary.splice(x,1)
                    gamesLibrary.push(game)
                }
            }

        } else if (action == "Expansion") {
            [gameToExp,exp] = game.split('-')
            let newGame = game.split('-').join(":")
            for (x in gamesLibrary) {
                if (gamesLibrary[x] == gameToExp) {
                    gamesLibrary.splice(x + 1,0,newGame)
                }
            }
        }
        command = input.shift()
    }
    console.log(gamesLibrary.join(' '))
}
games(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
])