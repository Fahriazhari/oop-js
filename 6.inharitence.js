// Pewarisan Sifat

// class parent
class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    // Method
    parentSay() {
        console.log(`${this.greeting} this is the parent class`)
    }
}

// class child 
class Child extends Parent {
    constructor(greeting, name) {
        super(greeting);
        this.name = name;
    }

    // Method child
    childSay() {
        console.log(`${this.greeting} ${this.name} , this is the child class`)
    }
}

// instantiate
var parent1 = new Parent("Hi");
parent1.parentSay();

var child1 = new Child("Halo", "Budi");
child1.childSay();


//
