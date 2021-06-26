const toggle = document.querySelector('#toggle'),
      active = document.querySelector('#active'),
      theme = document.querySelector('#light-theme');

active.addEventListener('click', () => {
    toggle.classList.toggle('active');
    theme.classList.toggle('active-1')
})      