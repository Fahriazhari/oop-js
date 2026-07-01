class Car {
    // mothod pada class
    sound() {
        return "rooom...vrooom"
    }
}

// Instantiate
var mobil1 = new Car();
console.log(`Bunyi mobil adalah = ${mobil1.sound()}`);

class Car1 {
    // mothod pada class
    sound(x) {
        return x + " vrooom...vrooom"
    }
}

// instantiate
var mobil2 = new Car1();
console.log(mobil2.sound("Hai Suara Mobil Saya "));


// Membuat class dengan property, method

class Laptop {
    constructor(merek, baterai) {
        this.merek = merek;
        this.baterai = baterai;
    }
    // method
    cekBatrai() {
        if (this.baterai >= 80) {
            console.log(`${this.merek} : baterai penuh (${this.baterai}%).`);
        } else if (this.baterai >= 30) {
            console.log(`${this.merek} : baterai sedang (${this.baterai}%).`);
        } else {
            console.log(`${this.merek} : baterai lemah (${this.baterai}%).`);
        }
    }
}

// Instantiate
console.log(`\n--- Cek Batrai Laptop --- \n`)
var Laptop1 = new Laptop('Asus', 90);
Laptop1.cekBatrai();

var Laptop2 = new Laptop('Acer', 70);
Laptop2.cekBatrai();

var Laptop3 = new Laptop('Dell', 30);
Laptop3.cekBatrai();




