


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