import products from './data/products.js';

function makeMarkup({ name, description, price }) {
    const productEl = document.createElement('article');
    productEl.classList.add('article');

    const nameEl = document.createElement('h1');
    nameEl.textContent = name;
    // productEl.append(nameEl);

    const priceEl = document.createElement('p');
    priceEl.textContent = price;
    priceEl.classList.add('product__price');

    const descEl = document.createElement('p');
    descEl.classList.add('product__description');
    descEl.textContent = description;

    productEl.append(nameEl, priceEl, descEl);

    return productEl;
}

// makeMarkup(product);

const newMarkup = products.map(makeMarkup);

const containerRef = document.querySelector('.js-container');

containerRef.append(...newMarkup);
