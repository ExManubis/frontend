"use strict";

// ARRAY
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters);

const newarr = letters;
newarr[4] = "*";

console.log(letters);

const people = ["Harry", "Ron", "Hermione"];
console.log(people);

let result;

// Add to end of array
result = people.push("Draco");
console.log(people);
console.log(result);

result = people.pop();
console.log(people);
console.log(result);

result = people.push("Neville");
console.log(people);
console.log(result);

result = people.push("Luna");
console.log(people);
console.log(result);

result = people.slice(0, 3);
console.log("SLICE:");
console.log(people);
console.log(result);
console.log("--------");

result = people.splice(1, 0, "Cho");
console.log("SPLICE:");
console.log(people);
console.log(result);
console.log("---------");

people[1] = "Ginny";
console.log(people);
console.log(result);

result = people.push("Fred", "George");
console.log(people);
console.log(result);

result = people.indexOf("Fred");
console.log(people);
console.log(result);

result = people.splice(result, 1);
console.log(people);
console.log(result);
