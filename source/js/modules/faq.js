const faq = document.querySelector('.faq');
const faqButtons = Array.from(faq.querySelectorAll('.faq__nav-button'));
const blocksQuestions = Array.from(faq.querySelectorAll('.questions__list'));

let blockIndex = 0;

const showQuestionsBlock = (index) => {
  blocksQuestions.forEach((item) => {
    item.style.display = 'none';
  });
  blocksQuestions[index].style.display = 'flex';
};


const showCurrentButton = (index) => {
  faqButtons.forEach((item) => item.classList.remove('faq__nav-button--current'));
  faqButtons[index].classList.add('faq__nav-button--current');
};

faqButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    blockIndex = index;
    showCurrentButton(blockIndex);
    showQuestionsBlock(blockIndex);
  });
});

export { showCurrentButton, showQuestionsBlock, blockIndex };
