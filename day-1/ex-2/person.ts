// personInterface.ts

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}

// Create a variable of type Person
let person1: Person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  greet: function (): string {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};

// Use console.log to print the greeting message
console.log(person1.greet()); // Output: Hello, my name is Jane Doe and I am 30 years old.
