const btn = document.querySelector('#btn'),
      navBar = document.querySelector('#nav-bar');

btn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})      