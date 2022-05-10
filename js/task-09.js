function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector('.change-color')
let changeColorText = document.querySelector('.color')
// console.log(changeColorText)

changeColorBtn.addEventListener('click', onChangeColor)

function onChangeColor( )
{
  let colorRandom = document.body.style.backgroundColor = getRandomHexColor();
  changeColorText.innerText = colorRandom;
}
