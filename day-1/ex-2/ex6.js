// complexObject.ts
// Define the ComplexObject with specified properties and methods
var ComplexObject = {
    num1: 5,
    num2: 10,
    str1: "Hello",
    str2: "World",
    numArray: [1, 2, 3, 4, 5],
    // Method to log values
    logValues: function (num, strArray) {
        console.log("Number: ".concat(num));
        console.log("String Array: ".concat(strArray.join(", ")));
    },
    // Method to return the sum of num1 and num2
    addNumbers: function () {
        return this.num1 + this.num2;
    },
    // Method to return the concatenation of str1 and str2
    getStrings: function () {
        return this.str1 + " " + this.str2;
    },
    // Method to return the length of numArray
    getArrayLength: function () {
        return this.numArray.length;
    },
};
// Testing the methods
ComplexObject.logValues(42, ["apple", "banana", "cherry"]);
// Output:
// Number: 42
// String Array: apple, banana, cherry
console.log(ComplexObject.addNumbers()); // Output: 15
console.log(ComplexObject.getStrings()); // Output: Hello World
console.log(ComplexObject.getArrayLength()); // Output: 5
