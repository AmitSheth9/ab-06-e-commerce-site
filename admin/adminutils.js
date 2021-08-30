import { teaArray } from '../products/teas.js';
import { renderTea } from '../products/utils.js';

export const PRODUCTS = 'PRODUCTS';

export function setProducts(productArray){
    const stringProduct = JSON.stringify(productArray);
    
    localStorage.setItem(PRODUCTS, stringProduct);
    
}

export function getProducts() {
  
    
    const stringStorage = localStorage.getItem(PRODUCTS);
    let parsedStorage = JSON.parse(stringStorage);

    if (!stringStorage) {
        return [];
    }

    
    console.log(parsedStorage);
    return parsedStorage;
}
export function addToProducts(product) {
    const products = getProducts();
    products.push(product);
    console.log(products);
    setProducts(products);
   
    


}
    /* 


    //addproducts using local storage
    //we have added products to array
    //next stringify and add to local storage
    //how to display on card the new product?
    //use localstorage as source for rendering
    //renderTea takes in a object and then creates a list with default characteristics for tea object and then assigns the name by accessing the teaobject that is the parameter
        //so that will work as long as a tea object is given to it, don't need to change anything
    //on product.js it loops through your teaArray of objects and then calls renderTea for each object. 
    //so change that from TeaArray to localStorage and should work. is localstorage an array?
    
    
    
*/
