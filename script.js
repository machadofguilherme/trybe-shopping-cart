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
  const e = event;
  e.target.innerText = '';
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  const aside = document.querySelector('.cart__items');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  aside.appendChild(li);
  return li;
};

const getItem = async (id) => {
  const item = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = item;
  const object = { sku, name, salePrice };
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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getProducts = async () => {
  const products = await fetchProducts();
  const productsList = products.results;
  productsList.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const objeto = { sku, name, image };
    createProductItemElement(objeto);
  });
};

window.onload = async () => {
  await getProducts();
};
