const inputFields = {};
const userInput = document.querySelectorAll('.input-box');
userInput.forEach((input) => {
  input.addEventListener('input', () => {
    inputFields[input.name] = input.value;
    localStorage.setItem('InputData', JSON.stringify(inputFields));
  });
});

const inputStorage = JSON.parse(localStorage.getItem('InputData'));
userInput.forEach((input) => {
  input.value = inputStorage[input.name];
});
