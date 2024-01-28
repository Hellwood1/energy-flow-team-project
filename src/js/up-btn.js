const upBtn = document.querySelector('.up-btn');
upBtn.addEventListener('click', toTopScroll);

window.onscroll = function () {
  scrollFunction();
};

export function scrollFunction() {
  if (document.documentElement.scrollTop > 2000) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
}

function toTopScroll() {
  document.documentElement.scrollTop = 0;
}
