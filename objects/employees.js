function asd(input) {
    class Person {
        constructor(name,personalNumber) {
            this.name = name
            this.personalNumber = personalNumber
        }
    }
    let newArr = []
    for(let x of input) {
        newArr.push(new Person(x,x.length))
    }
    newArr.forEach(i => {
        console.log(`Name: ${i.name} -- Personal Number: ${i.personalNumber}`)
    })
}
asd([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])