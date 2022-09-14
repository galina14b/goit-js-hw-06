function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesBlockEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', deleteBoxes);


function createBoxes(amount) {

  let result = [];
  amount = +inputEl.value;
  
  if (amount <= 0) {
    alert('Введіть число більше за 0');
  } else {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '10px';
      box.style.height = `30px`;
      box.style.width = `30px`;
      result.push(box);
    }

    let size = 30;

    result.map(item => {
      item.style.height = `${size}px`;
      item.style.width = `${size}px`;
      size += 10;
    })
    inputEl.value = '';
    boxesBlockEl.innerHTML = '';
    boxesBlockEl.append(...result);
  }
};

function deleteBoxes() {
  boxesBlockEl.innerHTML = '';
}
