const btnOpenEl = document.querySelector('[data-modal-open]');
const btnCloseEl = document.querySelector('[data-modal-close]');
const mobileModal = document.querySelector('.mobile-menu-wrapper');

const pageLinks = document.querySelector('.home-page');

pageLinks.classList.add('active-page');

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

const ifAbleSckroll = () => {
  if (mobileModal.classList.contains('none')) {
    return enableScroll();
  } else {
    return disableScroll();
  }
};

const modal = () => {
  btnOpenEl.addEventListener('click', () => {
    mobileModal.classList.toggle('none');
    ifAbleSckroll();
  });
  btnCloseEl.addEventListener('click', () => {
    mobileModal.classList.toggle('none');
    ifAbleSckroll();
  });
};

const mobileMenu = () => {
  if (!modal()) {
    return;
  }
  return modal();
};

export { mobileMenu };
