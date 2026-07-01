// Membuat class dengan nama Car
class Car {
    // Membuat constructor dengan parameter brand
    constructor(brand) {
        // Membuat property dengan nama brand
        this.brand = brand;
    }
}

// instantiate dari class Car - Objek1
var mobil1 = new Car('Mitsubishi');
console.log(mobil1.brand);

var mobil2 = new Car('Toyota');
console.log(mobil2.brand);

// Latihan Class
// Membuat sebuah class dengan nama peserta (nama, umur, proglat)

console.log('\n--- Latihan Class ---\n');

class Peserta {
    constructor(nama, umur, proglat) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// instantiation - menginstansiasi class
var peserta1 = new Peserta('Fahri', 18, 'Pengembangan web dengan node.js dan react.js');
console.log(`Nama: ${peserta1.nama}`);
console.log(`Umur: ${peserta1.umur}`);
console.log(`Proglat: ${peserta1.proglat}`);




