function darkMode() {
    let body = document.body;
    let button = document.querySelector('.button button')

    body.classList.toggle("dark")

    if (button.textContent == 'Night Mode'){
        button.textContent = 'Light Mode';
    }else {
        button.textContent = 'Night Mode'
    }

}