const iconNav = document.querySelector('#hamburger'),
       open = document.querySelector('#open'),
       close = document.querySelector('#close'),
      navList = document.querySelector('#nav-bar'),
      windowC = document.querySelector('#window');

      iconNav.addEventListener('click', () =>{
          navList.classList.toggle('active');
      })

       open.addEventListener('click', (e) => {
       windowC.classList.toggle('active-w');
      })

       close.addEventListener('click', (e) => {
       windowC.classList.toggle('active-w');
     })