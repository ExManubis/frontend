const name = 'Søren'

function Cap(string) {
    let name1 = string.substring(0, 2).toLowerCase();
    let name2 = string.substring(3).toLowerCase();
    let nameUpperCase = string.substring(2, 3).toUpperCase();
    let result = name1 + nameUpperCase + name2
    console.log(result)
}

Cap(name)