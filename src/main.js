//Header를 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    //header.style.backgroundColor = 'var(--color-primary)';
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }

  if (scrollY > window.scrollY) {
    homeElement.style.opacity = parseFloat(homeOpacity) + parseFloat(0.01);
  } else {
    homeElement.style.opacity = parseFloat(homeOpacity) - parseFloat(0.01);
  }

  homeOpacity = window
    .getComputedStyle(homeElement)
    .getPropertyValue('opacity');
  scrollY = window.scrollY;
});

//Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {});

const about = document.querySelector('#about');
const aboutOffsetTop = about.offsetTop;

let scrollY = window.scrollY;
let homeOpacity = 1;
