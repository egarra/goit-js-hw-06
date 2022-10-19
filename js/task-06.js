const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
    /* inputText.value.length === Number(inputText.dataset.length) ? inputText.classList.add('valid') : inputText.classList.add('invalid'); */
})