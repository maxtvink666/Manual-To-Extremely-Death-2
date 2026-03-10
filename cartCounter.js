function updateCartCounter(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const counter = document.getElementById("cart-count");

if(counter){
counter.textContent = cart.length;
}

}

updateCartCounter();