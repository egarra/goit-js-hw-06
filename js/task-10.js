function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlPanel = document.querySelector('#controls'),
      controlInput = controlPanel.querySelector('input'),
      createBtn = controlPanel.querySelector('[data-create]'),
      destroyBtn = controlPanel.querySelector('[data-destroy]'),
      boxesWrap = document.querySelector('#boxes');

let sizeBox = 30;

createBtn.addEventListener('click', () => {
   let boxesAmount = controlInput.value;
   createBoxes(boxesAmount);
})

destroyBtn.addEventListener('click', () => {
  let boxesAmount = controlInput.value;
  destroyBoxes(boxesAmount);
})

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {

    const box = document.createElement('div');
    box.classList.add('box-item');
    box.style.width = sizeBox + 'px';
    box.style.height = sizeBox + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesWrap.appendChild(box);
    
    sizeBox += 10;
  }
}

function destroyBoxes() {
  boxesWrap.querySelectorAll('.box-item').forEach(box => {
    box.remove();
    sizeBox = 30;
  })
}