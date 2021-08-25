

import { teaArray } from './teas.js';
import { addItemToCart } from '../cart/utils.js';


export function renderTea(teaObject) {
    const liEl = document.createElement('li');
    const productCard = document.createElement('div');
    const productName = document.createElement('div');
    const productImage = document.createElement('img');
    const productDescription = document.createElement('div');
    const price = document.createElement('div');
    const addButton = document.createElement('button');


    productCard.append(productName, productImage, productDescription, price, addButton);
    liEl.append(productCard);
    
    liEl.classList.add('productList');
    productCard.classList.add('productcard');
    productName.classList.add('productname');
    productImage.classList.add('productimage');
    productDescription.classList.add('productdescription');
    price.classList.add('price');
    addButton.classList.add('addbutton');
    
    productName.textContent = teaObject.name;
    productImage.src = teaObject.image;
    productDescription.textContent = teaObject.description;
    price.textContent = `Price: $${teaObject.price}`;
    addButton.textContent = `Add ${teaObject.name} to cart`;
    

    addButton.addEventListener('click', () => {
        alert(`You have added ${teaObject.name} to cart`);
        addItemToCart(teaObject);
        


    });
    return liEl;
}