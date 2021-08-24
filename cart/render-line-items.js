import { findById } from './utils.js';
import { cartArray } from './cart.js';
import { calcItemTotal } from './utils.js';
import { teaArray } from '../products/teas.js';

export function renderCart(cartItem) {
    const itemTD = document.createElement('td');
    const priceTD = document.createElement('td');
    const quantityTD = document.createElement('td');
    const itemCostTD = document.createElement('td');
    const itemTR = document.createElement('tr');
    
    
    const product = findById(teaArray, cartItem.id);
    console.log(product);
    itemTD.textContent = product.name;
    priceTD.textContent = product.price;
    quantityTD.textContent = cartItem.quantity;
    itemCostTD.textContent = calcItemTotal(cartItem.quantity, product.price);

    
    
    
    itemTR.append(itemTD, priceTD, quantityTD, itemCostTD);
    
    return itemTR;

}