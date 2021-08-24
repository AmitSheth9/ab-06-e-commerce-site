import { renderTea } from '../utils.js';
import { teaArray } from '../product.js';

const test = QUnit.test;

test('test if renderTea outputs the same format as static HTML', (expect) => {

    const expected = `<li>
    <div class="productcard">
    <div class="productname">Green Tea</div>
    <img class="productimage" src="../assets/greentea.jpeg">
    <div class="productdescription">High in antioxidants and improves brain function</div>
    <div class="price">Price: $4.99</div><button class="buybutton" type="button">Add Green Tea to cart</button>\n            </div>\n        </li>`;

    const actual = renderTea ({
        id: 'green',
        name: 'Green Tea',
        image: '../assets/greentea3.jpeg',
        description: 'High in antioxidants, improves brain function.',
        category: 'healthy',
        price: 4.99
    });


    expect.equal(actual, expected);
});