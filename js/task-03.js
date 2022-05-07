const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');


const makeImgList = image => {
  const { url, alt } = image;

  return `
  <li class ="gallery__list">
    <img class="gallery__img" src = ${url}  alt=${alt} >
    </img>
  </li>
  `;
}

const markup = images.map(makeImgList).join('')
// console.log(markup)
ulEl.insertAdjacentHTML("beforeend", markup);
  console.log(ulEl)
 
//   const UlLi = document.createElement('li');
//   UlLi.classList.add('gallery__list')
// // console.log(UlLi)

// const UlImg = document.createElement('img')
// UlImg.src = image.url;
//   UlImg.alt = image.alt;
//   UlImg.classList.add('gallery__img')

// UlLi.append(UlImg)
//   // ulEl.append(UlLi, UlImg)
//   return UlLi;
    

// console.log(makeImgList(images[0]));

// const elements = images.map(makeImgList)
// console.log(ulEl)
// ulEl.append(...elements);

// ulEl.insertAdjacentHTML("beforeend", makeImgList)
