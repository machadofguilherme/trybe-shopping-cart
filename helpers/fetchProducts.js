const fetchProducts = async (query) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const api = await fetch(url).then((data) => data.json());
  return api;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
