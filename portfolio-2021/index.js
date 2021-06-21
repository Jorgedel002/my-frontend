const iconNav = document.querySelector('#hamburger'),
      navList = document.querySelector('#nav-bar');

      iconNav.addEventListener('click', () =>{
          navList.classList.toggle('active');
      })