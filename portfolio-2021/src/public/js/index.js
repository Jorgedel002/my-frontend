const iconNav = document.querySelector('#hamburger'),
       open = document.querySelector('#open'),
       close = document.querySelector('#close'),
      navList = document.querySelector('#nav-bar'),
      number = document.querySelector('#number-form'),
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

     function validateKey(evt){
      let code = (evt.which) ? evt.which : evt.keyCode;
  
      if (code==8){
          return true;
      }else if (code >=48 && code <=57){
          return true;
      }else{
          return false;
      }
  }
  
  number.addEventListener('click', () => {
    validateKey();
  })