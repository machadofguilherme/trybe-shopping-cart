const saveList = [];
const empty = document.querySelector('.empty-cart');
const barSide = document.querySelector('.cart__items');

// Fonte: MDN -- https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
const clean = () => {
  empty.addEventListener('click', () => {
    while (barSide.firstChild) {
      barSide.removeChild(barSide.firstChild);
    }
    localStorage.clear();
  });
};

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

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  barSide.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  barSide.appendChild(li);
  return li;
};

const getItem = async (id) => {
  const item = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = item;
  const object = { sku, name, salePrice };
  saveList.push(object);
  saveCartItems(saveList);
  return createCartItemElement(object);
};

const createProductItemElement = ({ sku, name, image }) => {
  const productsContent = document.querySelector('.items');

  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.addEventListener('click', () => getItem(sku));
  section.appendChild(btn);
  productsContent.appendChild(section);

  return section;
};

const getProducts = async () => {
  const products = await fetchProducts();
  const productsList = products.results;
  productsList.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const objeto = { sku, name, image };
    createProductItemElement(objeto);
  });
};

const list = () => {
  const memory = getSavedCartItems();
  const data = JSON.parse(memory);
  data.forEach((item) => createCartItemElement(item));
};

window.onload = async () => {
  await getProducts();
  list();
  clean();
};
