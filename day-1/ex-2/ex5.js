// Tuple holding a string and an array of numbers
var myTuple = ["Numbers", [10, 20, 30]];
// Function to log each element of the tuple
function logTuple(tuple) {
    console.log("String part: ".concat(tuple[0]));
    console.log("Number array part: ".concat(tuple[1].join(", ")));
}
logTuple(myTuple);
// Output:
// String part: Numbers
// Number array part: 10, 20, 30
