
import { cartArray } from './cart.js';
import { getCart } from './utils.js';
import { renderCart } from './render-line-items.js';
import { teaArray } from '../products/teas.js';
import { calcOrderTotal } from './utils.js';


const cart = getCart();
for (let item of cart) {
    
    const tableBody = document.querySelector('#tablebody');

    tableBody.append(renderCart(item));
}
let orderTotal = calcOrderTotal(cart, teaArray);
const cartTotal = document.getElementById('footertotal');
cartTotal.textContent = `Total: ${orderTotal}`;

const placeOrderBtn = document.getElementById('placeorderbtn');
let string = '';
placeOrderBtn.addEventListener('click', () => {
    console.log(JSON.stringify(cart, true, 2));
    alert(`Thank you for placing your order! ${JSON.stringify(cart, true, 2)}`);
    localStorage.removeItem('cart');

});

if (cart.length === 0)  {
    placeOrderBtn.disable = true;
    placeOrderBtn.style.color = 'gray';
}

const shopAgainBtn = document.getElementById('shopagainbtn');


shopAgainBtn.addEventListener('click', () => {
    window.location = '../products/product.html';
});