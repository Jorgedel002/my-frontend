const openSub1 = document.querySelector('#open-sub-1');
const openSub2 = document.querySelector('#open-sub-2');
const openSub3 = document.querySelector("#open-sub-3");
const open = document.querySelector('#open');
const list = document.querySelector('#list');
const subItem1 = document.querySelector('#sub-list-1');
const subItem2 = document.querySelector('#sub-list-2');
const subItem3 = document.querySelector('#sub-list-3');

      open.addEventListener('click', (e) => {
          list.classList.toggle('active');

          const rutaActual = e.target.getAttribute('src');

          if(rutaActual == 'img/icon-hamburger.svg'){
              e.target.setAttribute('src', 'img/icon-close.svg');
          }else{
            e.target.setAttribute('src', 'img/icon-hamburger.svg');
          }
      })

      openSub1.addEventListener('click', () => {
          subItem1.classList.toggle('item-active-1');
          openSub1.classList.toggle('rotate')
      })

       openSub2.addEventListener('click', () => {
         subItem2.classList.toggle('item-active-1');
         openSub2.classList.toggle('rotate')
         
     })

     openSub3.addEventListener('click', () => {
         subItem3.classList.toggle('item-active-1');
         openSub3.classList.toggle('rotate')
     })