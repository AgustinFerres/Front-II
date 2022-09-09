const btn = document.querySelector('button');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');

let token;

btn.addEventListener('click', function(e){


    fetch('https://ctd-todo-api.herokuapp.com/v1/users', {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: pass.value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        token = data.jwt;
    })
    .catch(err => console.log(err));
})


