const counterValue = document.querySelector('#value');
let value = 0;

const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')


buttonMinus.addEventListener("click", () => {
    value -= 1;
    counterValue.textContent = value;
    
});

buttonPlus.addEventListener("click", () => {
    value += 1;
    counterValue.textContent = value;
});