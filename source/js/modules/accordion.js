const questionsItems = Array.from(document.querySelectorAll('.questions__item'));

function openAccordion() {
  questionsItems.forEach((item) => {
    const contant = item.querySelector('.questions__content');
    const header = item.querySelector('.questions__header-container');

    if (item.classList.contains('questions__item--open')) {
      contant.style.maxHeight = `${contant.scrollHeight}px`;
    }

    if (item.querySelector('[disabled]')) {
      header.style.pointerEvents = 'none';
    }

    item.addEventListener('click', onQuestionClick);
  });
}

function onQuestionClick(e) {
  e.preventDefault();
  const currentQuestion = e.target.closest('.questions__item');
  const currentContent = currentQuestion.querySelector('.questions__content');

  if (currentQuestion.querySelector('[disabled]')) {
    return;
  }

  currentQuestion.classList.toggle('questions__item--open');
  if (currentQuestion.classList.contains('questions__item--open')) {
    currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
  } else {
    currentContent.style.maxHeight = 0;
  }
}

export { openAccordion };
