// personInterface.ts
// Create a variable of type Person
var person1 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old.");
    },
};
// Use console.log to print the greeting message
console.log(person1.greet()); // Output: Hello, my name is Jane Doe and I am 30 years old.
