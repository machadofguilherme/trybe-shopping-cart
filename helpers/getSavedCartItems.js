const getSavedCartItems = () => {
  // seu código aqui
  const getList = localStorage.getItem('cartItems');
  return getList;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
