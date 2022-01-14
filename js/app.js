let upper  = document.querySelector('.upper-bar'),
    nav    = document.querySelector('.navbar'),
    slider = document.querySelector('.slider'),
    winH   = window.innerHeight,
    getH   = (winH-(upper.offsetHeight+nav.offsetHeight));
slider.style.height =`${getH}px`;
document.querySelector('.carousel-item').style.height = `${getH}px`;

let cur_iteam = document.querySelectorAll('.carousel-item') ; 
let array = Array.from(cur_iteam) ; 

array.forEach(element => {
    element.style.height = `${getH}px`;
});