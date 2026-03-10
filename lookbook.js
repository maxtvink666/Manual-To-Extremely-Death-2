const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

slides.forEach((s,i)=>s.style.display=i===0?'block':'none');

document.querySelector('.prev').onclick=()=>{
  slides[currentSlide].style.display='none';
  currentSlide = (currentSlide-1+slides.length)%slides.length;
  slides[currentSlide].style.display='block';
}

document.querySelector('.next').onclick=()=>{
  slides[currentSlide].style.display='none';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].style.display='block';
}