function asd(arr) {
    class Cat {
        constructor(name,age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let catsObjArr = []
    for (let x of arr) {
        [catName,catAge] = x.split(' ')
        let newCat = new Cat(catName,catAge) 
        catsObjArr.push(newCat)
    }
    for (let cat of catsObjArr) {
        cat.meow()
    } 
}
asd(['Mellow 2', 'Tom 5'])