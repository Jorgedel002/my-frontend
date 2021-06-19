const hamburgerIcon =  document.querySelector('#hamburger'),
      list = document.querySelector('#list');

hamburgerIcon.addEventListener('click', (e) => {
    list.classList.toggle('list-active');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/icons8-menu.svg'){
        e.target.setAttribute('src', 'img/cancel.svg');
        
    }else{
        e.target.setAttribute('src', 'img/icons8-menu.svg');
    }
})      