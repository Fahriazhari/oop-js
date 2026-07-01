// Membuat 1 parent class dan 2 child class
// parent memiliki 1 property nama dan 1 method untuk hitung diskon
// jika pembelian di atas 100ribu maka dapat diskon 20%
// jika pembelian 50ribu-100ribu maka dapat diskon 10%

// child 1 = burger
// child 2 = salad

// Nama makanan : burger
// Total harga: 100000
// Total bayar: Rp 100000

class Makanan {
    constructor(nama) {
        this.nama = nama;
    }
    hitungDiskon() {
        if (this.total_harga > 100000) {
            return this.total_harga * 0.2;
        } else if (this.total_harga >= 50000) {
            return this.total_harga * 0.1;
        } else {
            return 0;
        }
    }
}

class Burger extends Makanan {
    constructor(harga, jumlah) {
        super("Burger");
        this.harga = harga;
        this.jumlah = jumlah;
        this.total_harga = this.harga * this.jumlah;
    }
    cetakBon() {
        const diskon = this.hitungDiskon();
        const totalBayar = this.total_harga - diskon;
        console.log(`Nama makanan: ${this.nama}`);
        console.log(`Harga satuan: Rp ${this.harga}`);
        console.log(`Jumlah: ${this.jumlah}`);
        console.log(`Total harga: Rp ${this.total_harga}`);
        console.log(`Diskon: Rp ${diskon}`);
        console.log(`Total bayar: Rp ${totalBayar}`);
    }
}

class Salad extends Makanan {
    constructor(harga, jumlah) {
        super("Salad");
        this.harga = harga;
        this.jumlah = jumlah;
        this.total_harga = this.harga * this.jumlah;
    }
    cetakBon() {
        const diskon = this.hitungDiskon();
        const totalBayar = this.total_harga - diskon;
        console.log(`Nama makanan: ${this.nama}`);
        console.log(`Harga satuan: Rp ${this.harga}`);
        console.log(`Jumlah: ${this.jumlah}`);
        console.log(`Total harga: Rp ${this.total_harga}`);
        console.log(`Diskon: Rp ${diskon}`);
        console.log(`Total bayar: Rp ${totalBayar}`);
    }
}

const burger1 = new Burger(10000, 10);
const salad1 = new Salad(5000, 10);

console.log(`\n=======Harga Burger=======\n`);
burger1.cetakBon();
console.log(`\n=======Harga Salad=======\n`);
salad1.cetakBon();

// class Vehicle {
//     sound() {
//         console.log('This vehicle make a sound');
//     }
// }
// // child class
// class Car extends Vehicle {
//     // override method sound dari parent class
//     sound() {
//         console.log('vroom...vroom');
//     }
// }

// class Bike extends Vehicle {
//     // override method sound dari parent class
//     sound() {
//         console.log("Ring.....Ring")
//     }
// }