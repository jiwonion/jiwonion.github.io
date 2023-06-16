const header = document.querySelector('.header');

addEventListener('scroll', (e) => {
  if (window.scrollY > header.clientHeight) {
    header.style.backgroundColor = 'var(--color-primary)';
  } else if (window.scrollY <= header.clientHeight) {
    header.style.backgroundColor = 'transparent';
  }
});
