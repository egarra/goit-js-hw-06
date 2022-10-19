const userName = document.querySelector('#name-input'),
      valueName = document.querySelector('#name-output');

userName.addEventListener('input', () => {
    valueName.textContent = userName.value;
    if (valueName.textContent === '') {
        valueName.textContent = 'Anonymous';
    }
})