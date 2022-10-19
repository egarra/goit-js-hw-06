const decrBtn = document.querySelector('[data-action="decrement"]'),
      incrBtn = document.querySelector('[data-action="increment"]'),
      value = document.querySelector('#value');

let counterValue = 0;
      

decrBtn.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue;
})

incrBtn.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue;
})
