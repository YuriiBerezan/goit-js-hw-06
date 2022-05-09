let inputEl = document.querySelector('#validation-input')
let inputLength = inputEl.dataset.length;
console.log(inputLength);
// const input = document.querySelector('input');
inputEl.addEventListener('input', event => {
    const text = event.target.value;
    console.log(text)

  if (text.length == inputLength ){
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
