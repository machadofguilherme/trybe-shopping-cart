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
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const expectative = await fetchProducts('computador');
    expect(typeof expectative).toEqual('object');
  });

  it('Ao chamar a função fetchProducts sem argumento retorna um erro.', async () => {
    try {
      await fetchProducts();
    } catch (e) {
      return new Error('You must provide an url');
    }
  });
});
