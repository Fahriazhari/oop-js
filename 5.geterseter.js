class Orang {
    constructor(nama) {
        this._nama = nama;
    }

    // Membuat getter
    get nama() {
        console.log("Mengambil nama...");
        return this._nama;
    }
    set nama(value) {
        console.log("Mengubah nama...");
        if (value.length < 3) {
            console.log("Nama terlalu pendek!");
        } else {
            this._nama = value;

        }
    }
}

// instantiate
var orang1 = new Orang("Fahri");
console.log(orang1.nama);

orang1.nama = "Maul";
console.log(orang1.nama);

