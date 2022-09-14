const listEl = document.querySelector('#categories');
const listChildren = listEl.querySelectorAll('li.item');
console.log(`Number of categories: ${listChildren.length}`);


const listItems = [...listChildren];

const makeTitleAndLength = listItems.map(item => {
  const category = `Category: ${item.firstElementChild.textContent}`;
  const elements = `Elements: ${item.querySelectorAll('li').length}`;
  console.log(category);
  console.log(elements);
})

