const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
        
        const formElements = e.currentTarget.elements,
              userName = formElements.email.value,
              userPassword = formElements.password.value;

        const userInfo = {}
        
            if (userName === '' || userPassword === '' ) {
                alert('Fill every input, please');
            } else {
                userInfo.name = userName;
                userInfo.password = userPassword;
                console.log(userInfo);
                loginForm.reset();                
            }
    }
);

     

/* 2nd VARIANT */

/* const loginForm = document.querySelector('.login-form');

const userInfo = {};
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements,
          userName = formElements.email.value,
          userPassword = formElements.password.value;
    
    for (const input of formElements) {
        if (userName === '' || userPassword === '' ) {
            alert('Fill every input, please');
            break;
        }
        if (input.nodeName === 'INPUT') {
            userInfo[input.name] = input.value;      
        }
        
    }

    if (userName !== '' && userPassword !== '' ) {
        console.log(userInfo);
        loginForm.reset();
    }
}) */