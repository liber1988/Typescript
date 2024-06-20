// complete.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old.");
    },
};
console.log(person.greet()); // Output: Hello, my name is Jane Doe and I am 30 years old.
// Exercise 4: Classes and Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, " meters."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof woof!");
    };
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Dog named ".concat(this.name, " moved ").concat(distance, " meters."));
        _super.prototype.move.call(this, distance); // Call the parent class move method
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy");
myDog.bark(); // Output: Woof woof!
myDog.move(10); // Output: Dog named Buddy moved 10 meters. Buddy moved 10 meters.
