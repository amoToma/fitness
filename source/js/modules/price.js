const price = document.querySelector('.price');
const tabButtons = Array.from(price.querySelectorAll('.tabs__navigation-button'));
const cardLists = Array.from(price.querySelectorAll('.tabs__cards-list'));

let indexList = 0;

const showCardList = (index) => {
  cardLists.forEach((item) => {
    item.style.display = 'none';
  });
  cardLists[index].style.display = 'grid';
};

const showActiveTabs = (index) => {
  tabButtons.forEach((item) => item.classList.remove('tabs__navigation-button--current'));
  tabButtons[index].classList.add('tabs__navigation-button--current');
};

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    indexList = index;
    showActiveTabs(indexList);
    showCardList(indexList);
  });
});

export { showActiveTabs, showCardList, indexList };
