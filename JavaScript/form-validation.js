function validation() {
  const form = document.querySelector('form');
  const email = form.elements.email.value;
  const errorMsg = document.querySelector('#error');

  form.addEventListener('submit', (event) => {
    if (email === email.toLowerCase()) {
      form.submit();
    } else {
      event.preventDefault();
      errorMsg.innerHTML = '* Make sure your email id is in lower case.';
    }
  });
}
validation();