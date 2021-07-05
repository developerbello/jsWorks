// DataTypes : Null, Boolean, String, Number, Big Int, Symbols, Undefined, Objects

var data = "Database {id: 1234, name: 'Bello Ibrahim'}";
console.log("Before: ", data);
data = 34 // "Database {id: 1234, name: 'Bello Sheu'}";

console.log("After: " + data);

// Boolean
if (!"Hello There") { // Truty value
  console.log("This is True");
} else {
  console.log("This is False");
}

var lists = {} // The Object is Truthy

var checker = lists ? true : false;
console.log(checker)

// Null => Intentional absence of an Object
var str = "Corp member are refer to as Corper or corp";
var matcher = str.match(/corpcorp/g); // Output: null value type
console.log(matcher);

// Undefined
var values;
if (values === undefined) {
  console.log('Yes');
} else {
  console.log('No');
}
