function asd(input) {
    let oldPassword = input.shift()
    let newPassword = ''
    for (let line of input) {
        let [command,x1,x2] = line.split(' ')
        if (line === 'Done') {
            break
        } else if (command === 'TakeOdd') {
            for (let i = 1;i < oldPassword.length;i += 2) {
                newPassword += oldPassword[i]
            }
            oldPassword = newPassword
            console.log(newPassword)
            
        } else if (command === 'Cut') {
            x1 = Number(x1)
            x2 = Number(x2)
            let toRemove = oldPassword.substr(x1, x2)
            newPassword = oldPassword.replace(toRemove, '')
            oldPassword = newPassword
            console.log(newPassword)

        } else if (command === 'Substitute') {
            if (oldPassword.includes(x1)) {
                let temp = oldPassword.split(x1)
                
                oldPassword = temp.join(x2) 
                console.log(oldPassword)
            } else {
                console.log(`Nothing to replace!`)
            }
        } 
    }
    console.log(`Your password is: ${oldPassword}`)

}
asd([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]
  )