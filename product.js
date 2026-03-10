const products = {
pants1:{name:'FIRE PANTS',price:120,images:['images/fire.jpg'],desc:'Dark fire pants'},
pants2:{name:'SKIN PANTS',price:70,images:['images/skin1.jpg','images/skin2.jpg'],desc:'Smooth leather pants'},
pants3:{name:'WAX PANTS',price:240,images:['images/wax.jpg'],desc:'Glossy waxed pants'},
pants4:{name:'ZIP PANTS',price:150,images:['images/zip.jpg'],desc:'Zipped pants'},
pants5:{name:'KNIGHT PANTS',price:180,images:['images/knight.jpg'],desc:'Knight style pants'},
jacket:{name:'OPIUM JACKET',price:320,images:['images/jacket.jpg'],desc:'Dark red jacket'},
shorts:{name:'SHADOW SHORTS',price:90,images:['shorts.jpg'],desc:'Shadow shorts'}
};

const params = new URLSearchParams(window.location.search);
const id = params.get('item');

const container = document.getElementById('product-info');
const sliderImages = document.getElementById('slider-images');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if(products[id]){

const p = products[id];

container.innerHTML = `
<h1>${p.name}</h1>
<p>${p.desc}</p>
<p>Price: $${p.price}</p>
<button id="add-cart-btn">Add to Cart</button>
`;

sliderImages.innerHTML = p.images
.map((img,i)=>`<img src="${img}" class="slide ${i===0?'active':''}">`)
.join('');

const slides = document.querySelectorAll('.slide');
let current = 0;

if(slides.length <= 1){
prevBtn.style.display = 'none';
nextBtn.style.display = 'none';
}

prevBtn.onclick = () => {

slides[current].classList.remove('active');

current = (current - 1 + slides.length) % slides.length;

slides[current].classList.add('active');

};

nextBtn.onclick = () => {

slides[current].classList.remove('active');

current = (current + 1) % slides.length;

slides[current].classList.add('active');

};

document.getElementById('add-cart-btn').onclick = () => {

let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.push({
id:id,
name:p.name,
price:p.price
});

localStorage.setItem('cart',JSON.stringify(cart));

showToast("Item added to cart","cart");
updateCartCounter();

};

}