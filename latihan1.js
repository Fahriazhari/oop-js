// Latihan membuat class dengan property dan method

class Peserta {
    // Property
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }

    get nilai() {
        console.log("Mengambil nilai...");
        return this._nilai;
    }

    // membuat setter
    set nilai(value) {
        // console.log("Mengubah nilai...");
        if (value > 100 || value < 0) {
            console.log("Nilai harus berada diantara 0 sampai 100 !");
            return 0;
        } else {
            this._nilai = value;
            // console.log(`Nilai berhasil diubah!`)
        }
    }

    // method
    cekNilai() {
        if (this._nilai >= 90) {
            console.log(`${this.nama} : ${this.umur} tahun : ${this.proglat} : nilai Sangat Baik (${this._nilai}).`);
        } else if (this._nilai >= 80) {
            console.log(`${this.nama} : ${this.umur} tahun : ${this.proglat} : nilai Baik (${this._nilai}).`);
        } else if (this._nilai >= 70) {
            console.log(`${this.nama} : ${this.umur} tahun : ${this.proglat} : nilai Cukup (${this._nilai}).`);
        } else if (this._nilai >= 60) {
            console.log(`${this.nama} : ${this.umur} tahun : ${this.proglat} : nilai kurang (${this._nilai}).`);
        } else if (this._nilai < 60) {
            console.log(`${this.nama} : ${this.umur} tahun : ${this.proglat} : Tidak Lulus (${this._nilai})`)
        } else {
            console.log(`Input Salah!`)
        }
    }
}

// instantiate

console.log(`\n--- Cek Nilai Peserta --- \n`)

var peserta1 = new Peserta(
    'Fahri',
    19,
    'Pengembangan Web dengan Node.js dan React.js',
    102
);
peserta1.cekNilai();


