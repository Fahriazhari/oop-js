const Car = require('./vehicle');

var mobil1 = new Car('Toyota')
mobil1.info();

// Membuat 1 parent class dan 2 child class
// parent memiliki 1 property nama dan 1 method untuk hitung diskon
// jika pembelian di atas 100ribu maka dapat diskon 20%
// jika pembelian 50ribu-100ribu maka dapat diskon 10%

// child 1 = burger
// child 2 = salad

// Nama makanan : burger
// Total harga: 100000
// Total bayar: Rp 100000