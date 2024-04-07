import { setupVideo } from './modules/video';
import { showActiveTabs, showCardList, indexList } from './modules/price';
import { showCurrentButton, showQuestionsBlock, blockIndex } from './modules/faq';
import { openAccordion } from './modules/accordion';
export { juriSwiper, reviewsSwiper } from './modules/swiper';

setupVideo();
showActiveTabs(indexList);
showCardList(indexList);
showCurrentButton(blockIndex);
showQuestionsBlock(blockIndex);
openAccordion();

const form = document.querySelector('.form');

const formInputs = Array.from(form.querySelectorAll('.form__input'));

formInputs.forEach((item) => {
  item.addEventListener('blur', () => {
    if (item.value.length === 0) {
      showError();
    }
  });
});
