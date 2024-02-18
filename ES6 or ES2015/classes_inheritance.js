//Parent class
class Animal {
    constructor(name){
        this.name = name;
    } //creating a constructor

    eat(){
        console.log(`${this.name} is eating`);;
    }
    //this keyword is used to refer to current object
}

//child class inheriting from parent class Animal

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const animal = new Animal('lion');
animal.eat();

const dog = new Dog("Buddy", "Pitbull");
dog.eat();
dog.bark();


//classes are used to create objects and to create objects we use constructors
//inheritance is used to inherit the properties of the parent class to the child class