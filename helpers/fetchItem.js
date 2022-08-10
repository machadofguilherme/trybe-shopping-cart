const fetchItem = async (id) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${id}`;
  const apiRequisition = await fetch(url);
  const api = await apiRequisition.json();
  return api;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
