
import { cartArray } from './cart.js';
import { renderCart } from './render-line-items.js';
import { teaArray } from '../products/teas.js';


for (let item of cartArray) {
    
    const tableBody = document.querySelector('#tablebody');
    tableBody.append(renderCart(item));
}