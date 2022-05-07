let counterValue =document.querySelector('#value')
let valueEl = 0;
// let valueEl = Number(document.querySelector('#value').textContent);
const incrBtn = document.querySelector("[data-action = 'increment'] ")
const decrBtn = document.querySelector("[data-action = 'decrement'] ")
// console.log(counterValue)
// console.log(valueEl)


incrBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
    // // console.log(valueEl)
    
})
decrBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
    // console.log(valueEl)
})