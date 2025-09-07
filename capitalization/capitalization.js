const name = 'Mikkel'

function Cap(string) {
    let name1 = string.substring(0, 1).toUpperCase();
    let name2 = string.substring(1).toLowerCase();
    let result = name1 + name2
    console.log(result)
}

Cap(name)