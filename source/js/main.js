import { setupVideo } from './modules/video';
import { showActiveTabs, showCardList, indexList } from './modules/price';
import { showCurrentButton, showQuestionsBlock, blockIndex } from './modules/faq';
import { openAccordion } from './modules/accordion';
import './modules/swiper';
import { checkValid } from './modules/form';

setupVideo();
showActiveTabs(indexList);
showCardList(indexList);
showCurrentButton(blockIndex);
showQuestionsBlock(blockIndex);
openAccordion();
checkValid();
