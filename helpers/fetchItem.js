const fetchItem = async (id) => {
  // seu código aqui
  // throw new Error('You must provide an url');
  try {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const apiRequisition = await fetch(url);
  const api = await apiRequisition.json();
  return api;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
