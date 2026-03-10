const countries = {
  "USA":["New York","Los Angeles","Chicago"],
  "UK":["London","Manchester","Liverpool"],
  "Germany":["Berlin","Munich","Hamburg"],
  "France":["Paris","Lyon","Marseille"],
  "Italy":["Rome","Milan","Venice"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const orderTotal = document.getElementById('order-total');

for(let c in countries){
  const opt = document.createElement('option');
  opt.value = c;
  opt.textContent = c;
  countrySelect.appendChild(opt);
}

countrySelect.onchange = ()=>{
  const selected = countrySelect.value;
  citySelect.innerHTML='<option value="">Select City</option>';
  if(selected){
    countries[selected].forEach(city=>{
      const opt = document.createElement('option');
      opt.value=city;
      opt.textContent=city;
      citySelect.appendChild(opt);
    });
    citySelect.disabled=false;
  }else{
    citySelect.disabled=true;
  }
}

let cart = JSON.parse(localStorage.getItem('cart'))||[];
let total = cart.reduce((sum,item)=>sum+item.price,0);
orderTotal.textContent = total;

document.getElementById('order-form').onsubmit = e=>{
  e.preventDefault();
  showToast("Order successful! Total: $" + total);
  localStorage.removeItem('cart');
  window.location.href='index.html';
}