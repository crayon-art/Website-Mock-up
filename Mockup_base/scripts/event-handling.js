window.addEventListener('DOMContentLoaded', () => {
    console.log('event-handling.js script was successfully loaded');

    const menuIcon = document.querySelector('.fa.fa-bars');
    menuIcon.addEventListener('click', event => {
      console.log('Menu clicked');
      event.stopPropagation();
      document.querySelector('.menu').classList.remove('menu--hidden');
    });

    window.addEventListener('click', () => {
      console.log('HTML document clicked');
      document.querySelector('.menu').classList.add('menu--hidden');
    });

const searchIcon = document.querySelector('.fa.fa-search');
const modal = document.querySelector('.search-modal');
const searchBox = document.querySelector('.search-modal__input ');

searchIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click event from bubbling up to the window
  console.log('Search clicked');
  modal.classList.toggle('search-modal--hidden');
});

window.addEventListener('click', () => {
  console.log('HTML document clicked');
  const isClickInsideModal = modal.contains(event.target);
  const isClickInsideSearchBox = searchBox.contains(event.target);

    if (!isClickInsideModal && !isClickInsideSearchBox && !modal.classList.contains('search-modal--hidden')) {
        modal.classList.add('search-modal--hidden');
  }
});
  });
