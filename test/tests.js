import { renderCart } from '../cart/render-line-items.js';
import { cartArray } from '../cart/cart.js';

const test = QUnit.test;

test('test if renderTea outputs the same format as static HTML', (expect) => {

    const expected = "<tr><td class=\"itemclass\">Green Tea</td><td>$4.99</td><td>5</td><td>$24.95</td></tr>";

    const actual = renderCart(cartArray[0]);


    expect.equal(actual.outerHTML, expected);
});