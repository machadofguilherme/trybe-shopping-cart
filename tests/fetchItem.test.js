require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifica se fetchItem é uma função.', () => {
    const expectative = fetchItem();
    expect(typeof expectative).toBe('object');
  });

  it(`Executa fetchItem com o argumento do item "MLB1615760527"
  e verifica se fetch foi chamado;`, () => {
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it(`Verifica se ao chamar a função fetchItem com o argumento 
  do item "MLB1615760527", a função fetch utiliza o endpoint 
  "https://api.mercadolibre.com/items/MLB1615760527".`, () => {
    fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(endpoint);
  });

  it(`Teste se o retorno da função fetchItem com o argumento do 
  item "MLB1615760527" é uma estrutura de dados igual ao objeto 
  item que já está importado no arquivo.`, () => {
    const expectative = fetchItem('MLB1615760527');
    expect(typeof expectative).toEqual(typeof item);
  });

  it(`Teste se, ao chamar a função fetchItem sem argumento, 
  retorna um erro com a mensagem: 'You must provide an url'.`, async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
