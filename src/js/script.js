'use strict';
//slider

const slides=document.querySelectorAll('mySlides'),
    prev = document.querySelector('.reviev__slider-prev'),
    next = document.querySelector('.reviev__slider-next');

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex=slideIndex.length;
    }
    slides.forEach(item => item.style.display='none');

    slides[slideIndex-1].style.display='block';
}
function plusSlides(n){
    showSlides(slideIndex+=n);
}
 prev.addEventListener('click',()=>{
    plusSlides(-1);
});
 next.addEventListener('click',()=>{
    plusSlides(1);
});