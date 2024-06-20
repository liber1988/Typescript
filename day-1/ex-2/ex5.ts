// Tuple holding a string and an array of numbers
let myTuple: [string, number[]] = ["Numbers", [10, 20, 30]];

// Function to log each element of the tuple
function logTuple(tuple: [string, number[]]): void {
  console.log(`String part: ${tuple[0]}`);
  console.log(`Number array part: ${tuple[1].join(", ")}`);
}

logTuple(myTuple);
// Output:
// String part: Numbers
// Number array part: 10, 20, 30
