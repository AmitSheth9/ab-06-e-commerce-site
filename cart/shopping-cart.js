
import { cartArray } from './cart.js';
import { renderCart } from './render-line-items.js';
import { teaArray } from '../products/teas.js';
import { calcOrderTotal } from './utils.js';


for (let item of cartArray) {
    
    const tableBody = document.querySelector('#tablebody');

    tableBody.append(renderCart(item));
}
let orderTotal = calcOrderTotal(cartArray, teaArray);
const cartTotal = document.getElementById('footertotal');
cartTotal.textContent = `Total: ${orderTotal}`;