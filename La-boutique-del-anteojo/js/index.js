const navBar = document.querySelector('#nav-bar'),
      open = document.querySelector('#open');

      
open.addEventListener('click', () => {
    navBar.classList.toggle('active');
})


let images = ['/assets/img-promociones/1.jpg', '/assets/img-promociones/2.jpg'];

let slider = document.getElementById('slider');

let sliderContainer = document.getElementById('slider-container');

// const left = document.querySelector('#left'),
//       right = document.querySelector('#right');

//       left.addEventListener('click', () => {
//           slider.style.left = images.lenght * 100 + '%'
//       })
          

slider.style.width = images.lenght * 100 + '%'

for(let img in images){
    slider.innerHTML += `<img src="${images[img]}" class="slider-img" style="width: ${100/images.length}%">`;
}

let cont = 0;

let active = true;


const counter = () =>{
    if(active){
        cont++;
        if(cont>=images.length) cont = 0;
        setInterval(slideImage(cont), 7000);
        setInterval(setActive(cont), 7000);
    }
}

const startInterval = () => setInterval(counter, 7000);

startInterval();

const slideImage = (id) => {
    if(!active && !isNaN(id)){
        cont=id;
        setActive(id);
    }

    slider.style.left = "-" + id + "00%";
}