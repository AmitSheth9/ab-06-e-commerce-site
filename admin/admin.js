import { teaArray } from '../products/teas.js';
import { renderTea } from '../products/utils.js';
import { addToProducts, setProducts } from './adminutils.js';

setProducts(teaArray);
const form = document.getElementById('productform');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const productData = new FormData(form);

    const productObject = {
        id: productData.get('id'),
        name: productData.get('name'),
        image: productData.get('image'),
        description: productData.get('description'),
        category: productData.get('category'),
        price: productData.get('price'),
    };

    
    addToProducts(productObject);
    
    
});
   

    //window.location = '../products/product.html';



