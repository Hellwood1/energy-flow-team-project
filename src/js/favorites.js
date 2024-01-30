const pageLinks = document.querySelector('.navigation__links--box');

pageLinks.lastElementChild.classList.add('active-page');

import { checkDate } from './quote';

checkDate();

// function changeQuote() {
//   const storedQuote = JSON.parse(localStorage.getItem('quoteObj'));
//   document.querySelector('.quote-text').innerHTML = storedQuote.quote;
//   document.querySelector('.quote-author').innerHTML = storedQuote.author;
// }

// changeQuote();
