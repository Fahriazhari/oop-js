// encapsulation

class Car {
    constructor(brand) {
        this._carname = "BMW"
    }

    get carname() {
        return this._carname;
    }

    set carname(x) {
        return this._carname = x;
    }
}

// Instantiate
newcar = new Car("Audi");
console.log(newcar.carname);
console.log(newcar._carname)


class Car1 {
    #carname;
    constructor(brand) {
        this.#carname = brand;
    }
    get carname() {
        return this.#carname;
    }
    set carname(x) {
        this.#carname = x;
    }
}

newCar = new Car1("Tesla");

console.log(newCar.carname);