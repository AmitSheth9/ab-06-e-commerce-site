
import { teaArray } from './teas.js';
import { renderTea } from './utils.js';

const ulEl = document.getElementById('productlist');

for (let tea of teaArray) {
    const li = renderTea(tea);
    ulEl.append(li);
}

const proceedButton = document.getElementById('proceedbutton');

proceedButton.addEventListener('click', () => {
    window.location = './cart/cart.html';
});