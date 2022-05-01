
const navUlEl = document.querySelector('#categories');
const childrenUlEl = navUlEl.children.length;
// console.log(UlEl)
console.log("Number of categories:", childrenUlEl);

const navLiEl = navUlEl.children;
// console.log(LiEl);

// const navCategories = document.querySelectorAll('#categories h2');

for ( let i = 0; i < navLiEl.length; i+=1) {
     const childrenOfLi = navLiEl[i].children;
    // console.log(childrenOfLi)
    const textContent = childrenOfLi[0].textContent;
    
    console.log("Category:", textContent);
   
    const countOfChild = childrenOfLi[1].children.length;
  console.log("Elements: ", countOfChild);

}
   





