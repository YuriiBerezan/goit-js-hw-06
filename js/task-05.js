let input = document.querySelector('#name-input')
// console.log(input)
let span = document.querySelector('#name-output')
// console.log(span)

input.addEventListener('input', onInputChange)

function onInputChange(event) {
  
    if (event.currentTarget.value === '') {
        span.textContent = 'Anonymous'
    } else {
        span.textContent = event.currentTarget.value;
    }
}