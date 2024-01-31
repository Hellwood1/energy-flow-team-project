const btnOpenEl = document.querySelector('[data-modal-open]');
const btnCloseEl = document.querySelector('[data-modal-close]');
const mobileModal = document.querySelector('.mobile-menu-wrapper');

export const showCurrentPageHome = () => {
  const pageLinks = document.querySelector('.home-page');
  const pageMobileLinks = document.querySelector('.home-mobile-page');
  if (pageLinks && pageMobileLinks) {
    pageLinks.classList.add('active-page');
    pageMobileLinks.classList.add('active-page');
  }
};

export const showCurrentPageFavorites = () => {
  const pageLinks = document.querySelector('.favorites-page');
  const pageMobileLinks = document.querySelector('.favorites-mobile-page');
  if (pageLinks && pageMobileLinks) {
    pageLinks.classList.add('active-page');
    pageMobileLinks.classList.add('active-page');
  }
};

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

let supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); 
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.addEventListener('touchmove', preventDefault, wheelOpt); 
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const ifAbleScroll = () => {
  if (mobileModal && mobileModal.classList.contains('none')) {
    enableScroll();
  } else {
    disableScroll();
  }
};

const modal = () => {
  if (btnOpenEl && btnCloseEl) {
    btnOpenEl.addEventListener('click', () => {
      mobileModal.classList.toggle('none');
      ifAbleScroll();
    });
    btnCloseEl.addEventListener('click', () => {
      mobileModal.classList.toggle('none');
      ifAbleScroll();
    });
  } else {
    console.error('Modal open/close buttons not found');
  }
};

const mobileMenu = () => {
  modal();
};

export { mobileMenu };
