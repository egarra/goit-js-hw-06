function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector('.change-color'),
      colorName = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
})


