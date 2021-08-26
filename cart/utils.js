


export function findById(productArray, id) {
    for (let item of productArray) {
        if (item.id === id) {
            return item;
        }
       
    }
}

export function calcItemTotal(quantity, cost) {
    let itemTotal = quantity * cost;
    return itemTotal;

}

export function calcOrderTotal(shopArray, productArray) {
    let accumulator = 0;
    for (let item of shopArray) {
        let product = findById(productArray, item.id);
        let itemTotal = calcItemTotal(item.quantity, product.price);
        
        accumulator = accumulator + itemTotal;
        
    }
    return accumulator.toLocaleString('en-US',
        { style: 'currency', currency: 'USD' });
}


export function setCart(cartArray) {
    let stringCart = JSON.stringify(cartArray);
    localStorage.setItem('cart', stringCart);
}
export function getCart() {
    const stringCart = localStorage.getItem('cart');
    if (!stringCart) {
        return [];
    }
    const arrayObjectCart = JSON.parse(stringCart);
    return arrayObjectCart;
}

export function addItemToCart(productItem) {
    let currentCart = getCart();
    
    let cartItem = findById(currentCart, productItem.id);
    
    if (!cartItem) {
        currentCart.push({ id: productItem.id, quantity: 1 });
        
    }
    else {
        cartItem.quantity++;
    }

    setCart(currentCart);
}

//export function clearCart