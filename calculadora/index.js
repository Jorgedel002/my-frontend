function del(){
    const value = document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

const start = document.querySelector('#bar');
const firstT = document.querySelector('#first-theme');
const secondT = document.querySelector('#second-theme');
const thirdT = document.querySelector('#third-theme');
const body = document.querySelector('body');

firstT.addEventListener('click', () => {
    start.classList.toggle('start');
    start.classList.remove('center');
    start.classList.remove('end');
    body.classList.toggle('body')
    body.classList.remove('active-1')
    body.classList.remove('active-2')
});

 secondT.addEventListener('click', () => {
     start.classList.toggle('center');
     start.classList.remove('start');
     start.classList.remove('end');
     body.classList.toggle('active-1');
     body.classList.remove('active-2');
 });

  thirdT.addEventListener('click', () => {
      start.classList.toggle('end');
      start.classList.remove('center');
      start.classList.remove('start');
      body.classList.toggle('active-2')
      body.classList.remove('active-1')
  })
