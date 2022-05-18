function asd(string) {
    let reversed = ''
    for (let i = string.length - 1;i >= 0; i--) {
        reversed += string[i]
    }
    let middle = reversed.length / 2

    console.log(reversed.substring(middle,reversed.length))
    console.log(reversed.substring(0,middle))
}
asd('tluciffiDsIsihTgnizamAoSsIsihT')