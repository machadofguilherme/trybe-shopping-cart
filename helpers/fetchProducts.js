const fetchProducts = async () => {
  // seu código aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const apiRequisition = await fetch(url);
  const api = apiRequisition.json();
  return api;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
