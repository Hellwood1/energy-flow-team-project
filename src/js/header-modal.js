const btnOpenEl = document.querySelector('[data-modal-open]');
const btnCloseEl = document.querySelector('[data-modal-close]');
const mobileModal = document.querySelector('.header__modal');

const pageLinks = document.querySelector('.navigation__links--box');

pageLinks.firstElementChild.classList.add('active-page');

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

// modern Chrome requires { passive: false } when adding event
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

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
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
