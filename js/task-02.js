const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
// console.log(ulEl)

// const ulAddLi = document.createElement('li');

// ulAddLi.textContent = 'onion';
// ulAddLi.classList.add('item')
// // console.log(ulAddLi)

// // const list = ingredients.map(option => {

// // })

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// // console.log(list)
// ulEl.innerHTML = list;
// // console.log(list)
// console.log(ulEl)
// // ulEl.append(list, ulAddLi);   
// ulEl.appendChild(ulAddLi)

const addListItems = (array) => {
    const listArray = array.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    })
    ulEl.append(...listArray);
}

addListItems(ingredients);