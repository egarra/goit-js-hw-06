const loginForm = document.querySelector('.login-form'),
      loginInputs = loginForm.querySelectorAll('input');

let userInfo = {};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    loginInputs.forEach(input => {
        if(input.value === '') {
            alert('Fill every input, please');
        } else {
            userInfo[input.name] = input.value;
        }
    })
    loginForm.reset();
    console.log(userInfo);
})


/* 2nd VARIANT */

/* const loginForm = document.querySelector('.login-form'),
      loginElems = document.querySelector('.login-form').elements;

let userInfo = {};
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 0; i < loginElems.length; i++) {
        if (loginElems[i].nodeName === 'INPUT' && loginElems[i].value === '') {
            alert('Fill every input, please');
        } else if (loginElems[i].nodeName === 'INPUT') {
            userInfo[loginElems[i].name] = loginElems[i].value;
        }
    }
    loginForm.reset();
    console.log(userInfo);
}) */