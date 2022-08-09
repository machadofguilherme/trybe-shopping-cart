require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verifica se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts()).toBe('object');
  });

  it('Executa a função fetchProducts com o argumento "computador" e testa se fetch foi chamado.', async () => {
    fetchProducts('computador');
    await expect(fetch).toBeCalled();
  });

  it('Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const expected = fetchProducts('computador');
    const result = fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    await expect(expected).toBeCalledWith(result);
  });

  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', () => {
    const expected = fetchProducts('computador');
    expect(expected).toEqual(computadorSearch);
  });

  // Teste 
  it('Verifica se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url".', () => {
    const error = 'You must provide an url';
    const expected = fetchProducts();
    expect(expected).toEqual(new Error(error));
  });
});
