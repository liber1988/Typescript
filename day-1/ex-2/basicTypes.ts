// basicTypes.ts

// Exercise 2: Basic Types and Type Annotations

// Variable declarations with types
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "John";
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["hello", 10];

// Function to return the square of a number
function square(num: number): number {
  return num * num;
}

// Calling the function and printing the result
console.log(square(5)); // Output: 25

// Exercise 3: Creating and Using Interfaces

// Define the Person interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}

// Create a variable of type Person
let person: Person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  greet: function (): string {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};

// Use console.log to print the greeting message
console.log(person.greet()); // Output: Hello, my name is Jane Doe and I am 30 years old.
