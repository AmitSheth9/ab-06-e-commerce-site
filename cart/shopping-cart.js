
import { cartArray } from './cart.js';
import { clearCart, getCart } from './utils.js';
import { renderCart } from './render-line-items.js';
import { teaArray } from '../products/teas.js';
import { calcOrderTotal } from './utils.js';
import { getProducts } from '../admin/adminutils.js';

const products = getProducts();
const cart = getCart();
for (let teaitem of cart) {
    
    const tableBody = document.querySelector('#tablebody');

    tableBody.append(renderCart(teaitem));
}
let orderTotal = calcOrderTotal(cart, products);
const cartTotal = document.getElementById('footertotal');
cartTotal.textContent = `Total: ${orderTotal}`;

const placeOrderBtn = document.getElementById('placeorderbtn');

placeOrderBtn.addEventListener('click', () => {
    alert(`Thank you for placing your order! ${JSON.stringify(cart, true, 2)}`);
    clearCart();

});

if (cart.length === 0) {
    placeOrderBtn.disable = true;
    placeOrderBtn.style.color = 'gray';
}

const shopAgainBtn = document.getElementById('shopagainbtn');


shopAgainBtn.addEventListener('click', () => {
    window.location = '../products/product.html';
});