const openBar = document.querySelector('#open'),
      navBar = document.querySelector('#nav-bar');

      openBar.addEventListener('click', () => {
          navBar.classList.toggle('active');
      })