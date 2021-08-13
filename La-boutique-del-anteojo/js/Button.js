const navBar = document.querySelector('#nav-bar'),
      open = document.querySelector('#open');

      
open.addEventListener('click', () => {
    navBar.classList.toggle('active');
})