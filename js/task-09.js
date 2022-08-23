function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const span = document.querySelector(".color");
const chgBtn = document.querySelector(".change-color");
chgBtn.addEventListener("click", changeBgnd);
function changeBgnd() {
  const ourColor = getRandomHexColor();
  body.style.backgroundColor = `${ourColor}`;
  span.textContent = `${ourColor}`;
}