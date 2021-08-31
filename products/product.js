
import { teaArray } from './teas.js';
import { renderTea } from './utils.js';
import { getProducts, setProducts } from '../admin/adminutils.js';

const setDefaultProducts = setProducts(teaArray);
const products = getProducts();
const ulEl = document.getElementById('productlist');

for (let tea of products) {
    const li = renderTea(tea);
    ulEl.append(li);
}

const proceedButton = document.getElementById('proceedbutton');

proceedButton.addEventListener('click', () => {
    window.location = '../cart/cart.html';
});




