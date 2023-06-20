'use strict';

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projectsContainer.classList.add('anim-out');
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

const navBarItems = document.querySelectorAll('.header__menu__item');
let options = {
  rootMargin: '0px',
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      navBarItems.forEach((item) => {
        if (entry.target.id === item.dataset.type) {
          navActiveSelection(item);
        }
      });
    }
  });
}, options);

function navActiveSelection(selection) {
  const active = document.querySelector('.header__menu__item.active');
  active.classList.remove('active');
  selection.classList.add('active');
}

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
  observer.observe(section);
});
