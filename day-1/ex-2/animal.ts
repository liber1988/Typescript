// complete.ts

// Exercise 3: Creating and Using Interfaces

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}

let person: Person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  greet: function (): string {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};

console.log(person.greet()); // Output: Hello, my name is Jane Doe and I am 30 years old.

// Exercise 4: Classes and Inheritance

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof woof!");
  }

  move(distance: number = 0): void {
    console.log(`Dog named ${this.name} moved ${distance} meters.`);
    super.move(distance); // Call the parent class move method
  }
}

const myDog = new Dog("Buddy");
myDog.bark(); // Output: Woof woof!
myDog.move(10); // Output: Dog named Buddy moved 10 meters. Buddy moved 10 meters.
