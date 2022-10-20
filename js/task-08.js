const loginForm = document.querySelector('.login-form');
      /* loginInputs = loginForm.querySelectorAll('input'); */

let userInfo = {};

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
     e.preventDefault();
        
        const loginInputs = e.currentTarget.elements,
              userName = loginInputs.email.value,
              userPassword = loginInputs.password.value;
        console.log(loginInputs)
        for (const input of loginInputs) {
            if (input.nodeName === 'INPUT' && userName === '' && userPassword === '' ) {
                alert('Fill every input, please');
                break;
            } 
            if (userName !== '' && userPassword !== '') {
                userInfo[input.name] = input.value;
                console.log(userInfo);
                loginForm.reset();
            }
            
        }
    }

/* 2nd VARIANT */
/* 
const loginForm = document.querySelector('.login-form'),
      loginElems = document.querySelector('.login-form').elements;

let userInfo = {};
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    for (let i = 0; i < loginElems.length; i++) {
        if (loginElems[i].nodeName === 'INPUT' && loginElems[i].value === '') {
            alert('Fill every input, please');
            break;
        } if (loginElems[i].nodeName === 'INPUT' && loginElems[i].value !== '') {
            userInfo[loginElems[i].name] = loginElems[i].value;
            loginForm.reset();
            console.log(userInfo);
        }
        
    }
   
}) */