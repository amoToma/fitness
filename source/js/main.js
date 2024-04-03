// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { setupVideo } from './modules/video';
import { showActiveTabs, showCardList, indexList } from './modules/price';
import { showCurrentButton, showQuestionsBlock, blockIndex } from './modules/faq';

setupVideo();
showActiveTabs(indexList);
showCardList(indexList);
showCurrentButton(blockIndex);
showQuestionsBlock(blockIndex);
