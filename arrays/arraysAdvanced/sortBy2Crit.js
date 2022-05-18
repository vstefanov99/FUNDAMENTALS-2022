function asd(input) {
    let output = input
        .sort((a, b) => a.length - b.length ||a.localeCompare(b))

    output.forEach(x => {
        console.log(x)
    })
}
asd(["test","Deny","omen","Default"])