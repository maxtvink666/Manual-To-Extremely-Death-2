const cartItemsDiv = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
const orderBtn = document.getElementById('order-btn');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach((item,index)=>{
    total += item.price;
    const div = document.createElement('div');
    div.className='cart-item';
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button data-index="${index}" class="remove-btn">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
  });
  totalPriceSpan.textContent = total;
  document.querySelectorAll('.remove-btn').forEach(btn=>{
    btn.onclick=()=>{
      cart.splice(btn.dataset.index,1);
      localStorage.setItem('cart',JSON.stringify(cart));
      renderCart();
      showToast("Item removed from cart","remove");
      updateCartCounter();
    }
  });
}

orderBtn.onclick=()=>{
  if(cart.length>0){
    window.location.href='order.html';
  }else{
    showToast("Cart is empty","error");
  }
}

renderCart();