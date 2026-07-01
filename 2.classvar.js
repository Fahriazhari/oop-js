var Car = class {
    constructor(brand) {
        this.brand = brand;
    }
}

// instantiation - menginstansiasi class
var mobil1 = new Car('Honda');
console.log(mobil1.brand);

var mobil2 = new Car('Toyota');
console.log(mobil2.brand);