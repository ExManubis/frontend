const name = "Albus Percival Wulfric Brian Dumbledore";

let firstNameEnd = name.indexOf(' ')
let firstName = name.substring(0, firstNameEnd)
console.log(firstName)

let middleNameEnd = name.lastIndexOf(' ')
let middleName = name.substring(firstNameEnd, middleNameEnd)
console.log(middleName)

let lastName = name.substring(middleNameEnd)
console.log(lastName)