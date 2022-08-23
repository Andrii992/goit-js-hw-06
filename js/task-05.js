const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', newInp);
function newInp(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    }
}