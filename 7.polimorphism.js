// satu method bisa bweisi lebih dari saatu
// parent class
class Vehicle {
    sound() {
        console.log('This vehicle make a sound');
    }
}
// child class
class Car extends Vehicle {
    // override method sound dari parent class
    sound() {
        console.log('vroom...vroom');
    }
}

class Bike extends Vehicle {
    // override method sound dari parent class
    sound() {
        console.log("Ring.....Ring")
    }
}
// instantiate
var vehicle1 = new Vehicle();
vehicle1.sound();

var vehicle2 = new Car();
vehicle2.sound();

var vehicle3 = new Bike();
vehicle3.sound();

// output:
// This vehicle make a sound
// vroom...vroom
// Ring.....Ring