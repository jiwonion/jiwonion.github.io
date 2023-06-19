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
});

//Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Arrow up 화살표 숨기기
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

//bar 클릭시 메뉴 구현
const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');
menuButton.addEventListener('click', () => {
  const menuDisplay = menu.style.display;
  if (menuDisplay == 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

const menuItems = document.querySelectorAll('.header__menu__item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((element) => {
      element.classList.remove('active');
    });
    menuItem.classList.add('active');
    menu.style.display = 'none';
  });
});
