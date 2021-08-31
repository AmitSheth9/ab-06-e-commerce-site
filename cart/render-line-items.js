/* eslint-disable no-console */
import { findById } from './utils.js';
import { cartArray } from './cart.js';
import { calcItemTotal } from './utils.js';
import { teaArray } from '../products/teas.js';
import { getProducts } from '../admin/adminutils.js';


const products = getProducts();

export function renderCart(cartItem) {
    const itemTD = document.createElement('td');
    const priceTD = document.createElement('td');
    const quantityTD = document.createElement('td');
    const itemCostTD = document.createElement('td');
    const itemTR = document.createElement('tr');
    
    
    
    const product = findById (products, cartItem.id);
    console.log(product);
    itemTD.textContent = product.name;
    priceTD.textContent = `$${product.price}`;
    quantityTD.textContent = cartItem.quantity;
    
    itemTD.classList.add('itemclass');
    let itemTotal = calcItemTotal(cartItem.quantity, product.price);
    
    itemCostTD.textContent = itemTotal.toLocaleString('en-US',
        { style: 'currency', currency: 'USD' });
    
    
    
    itemTR.append(itemTD, priceTD, quantityTD, itemCostTD);
    
    return itemTR;

}