document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});

document.querySelectorAll('button, .nav a').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{el.style.transition='all 0.4s ease';});
});

document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click', ()=>{
    const id = card.dataset.id;
    window.location.href = `product.html?item=${id}`;
  });
});