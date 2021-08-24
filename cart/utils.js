


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