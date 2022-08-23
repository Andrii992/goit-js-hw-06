const refs = { validationInput: document.querySelector('#validation-input'), };

const testValidation = (event) => {
    event.currentTarget.value.length === Number(refs.validationInput.dataset.length)
        ? refs.validationInput.classList.add("valid")
        : refs.validationInput.classList.add("invalid");
    
    if (event.currentTarget.value === "") {
        refs.validationInput.classList.remove("valid", "invalid");
    }
};

const resetValidation = (event) => 
    refs.validationInput.classList.remove("valid", "invalid");

refs.validationInput.addEventListener("blur", testValidation);
refs.validationInput.addEventListener("focus", resetValidation);