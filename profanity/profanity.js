const curseWords = [{ bad: "var", good: "const", },
    { bad: "float", good: "grid", },
    { bad: "marquee", good: "just don't", },];

let filtered = false

const text = document.querySelector('p')

function filter() {
    if (filtered === true) {
        alert('Teksten er allerede filtreret')
    } else {
        let filterText = text.innerText
        console.log(filterText)
        console.log(curseWords)
        curseWords.forEach(word => {
            console.log(word.bad)
            let newstring = filterText.replace(word.bad, `<span>${word.good}</span>`)
            filterText = newstring
            return filterText
        })
        text.innerHTML = filterText
        filtered = true
    }

}

document.getElementById('filter').addEventListener('click', filter)