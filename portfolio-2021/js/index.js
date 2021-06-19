const iconNav = document.querySelector('#hamburger'),
      navList = document.querySelector('#nav-bar');

      iconNav.addEventListener('click', (e) =>{
          navList.classList.toggle('active');
      })