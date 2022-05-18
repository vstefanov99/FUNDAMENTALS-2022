class Laptop {
    constructor(info,quality) {
        this.info = info
        this.quality = quality
        this.isOn = false

    }
    turnOff() {
        this.isOn = false
        this.quality --
    }
    turnOn() {
        this.isOn = true
        this.quality --
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
    get price() {
        let x = (this.info.age * 2)
        let y = (this.quality * 0.5)
        let totalPrice = (800 - x + y)
        return totalPrice
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)