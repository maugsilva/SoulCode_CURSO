// Classe base
class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      console.log(`${this.name} is making a sound.`);
    }
  }
  
  // Classe derivada
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'Dog');
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Outra classe derivada
  class Cat extends Animal {
    constructor(name, color) {
      super(name, 'Cat');
      this.color = color;
    }
  
    meow() {
      console.log(`${this.name} is meowing.`);
    }
  }
  
  // Classe estática
  class MathUtility {
    static square(number) {
      return number * number;
    }
  }
  
  // Classe para representar um carro
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    drive() {
      console.log(`Driving the ${this.make} ${this.model}.`);
    }
  }
  
  // Classe derivada de Car
  class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
      super(make, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    charge() {
      console.log(`Charging the ${this.make} ${this.model} with a ${this.batteryCapacity} kWh battery.`);
    }
  }
  
  // Exemplo de uso das classes
  const dog = new Dog('Buddy', 'Golden Retriever');
  dog.speak();
  dog.bark();
  
  const cat = new Cat('Whiskers', 'Calico');
  cat.speak();
  cat.meow();
  
  const car = new ElectricCar('Tesla', 'Model 3', 75);
  car.drive();
  car.charge();
  
  const squaredNumber = MathUtility.square(5);
  console.log(`The square of 5 is ${squaredNumber}.`);
  