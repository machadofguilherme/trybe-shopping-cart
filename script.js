// Usei esse artigo como referência para aplicar um map no DOM:
// https://dev.to/jess/how-do-i-use-foreach-on-dom-elements-3m9h

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const productsContent = document.querySelector('.items');
  console.log(sku, name, image);

  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  console.log(section);
  productsContent.appendChild(section);
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = async () => {
  const products = await fetchProducts('computador');
  const productsList = products.results;
  await Array.prototype
    .map.call(productsList, (product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const objeto = { sku, name, image };
    createProductItemElement(objeto);
  });
};
