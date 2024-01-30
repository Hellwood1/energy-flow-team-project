

const pageLinks = document.querySelector('.navigation__links--box');

pageLinks.lastElementChild.classList.add('active-page');

import { checkDate } from './quote';
import { toggleModal } from './header-modal';

checkDate();
toggleModal();