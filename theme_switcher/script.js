const selector = document.getElementById('theme-switcher')

selector.addEventListener('change', (e) => {
    let theme = e.target.value
    document.querySelector('body').dataset.theme = theme
})