const upBtn = document.querySelector('.up-btn');
upBtn.addEventListener('click', toTopScroll);

window.onscroll = function () {
  scrollFunction();
};

export function scrollFunction() {
  if (document.documentElement.scrollTop > 1000) {
    upBtn.style.display = 'flex';
  } else {
    upBtn.style.display = 'none';
  }
}

function toTopScroll() {
  document.documentElement.scrollTop = 0;
}
