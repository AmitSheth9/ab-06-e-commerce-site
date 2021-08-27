import { renderCart } from '../cart/render-line-items.js';
import { cartArray } from '../cart/cart.js';
import { calcOrderTotal, findById } from '../cart/utils.js';
import { teaArray } from '../products/teas.js';
import { getCart } from '../cart/utils.js';

const test = QUnit.test;

test('test findById to see if id102 returns correct product', (expect) => {
    const expected = {
        id: 102,
        name: 'Earl Grey Tea',
        image: '../assets/earlgrey2.jpeg',
        description: 'Black tea combined with bergamot citrus extract',
        category: 'black',
        price: 3.99
    };

    const actual = findById(teaArray, 102);

    expect.deepEqual(actual, expected);
});

test('calcOrderTotal to see if order total is returneed', (expect) => {
    const expected = "$44.41";

    const actual = calcOrderTotal(cartArray, teaArray);

    expect.equal(actual, expected);
});

test('test if renderTea outputs the same format as static HTML', (expect) => {

    const expected = "<tr><td class=\"itemclass\">Green Tea</td><td>$4.99</td><td>5</td><td>$24.95</td></tr>";

    const actual = renderCart(cartArray[0]);


    expect.equal(actual.outerHTML, expected);
});

test('getCart to make sure it returns cart', (expect) => {
    const expected = [{ id: 101, quantity: 4 }, { id:104, quantity: 6 }];

    const actual = 
});