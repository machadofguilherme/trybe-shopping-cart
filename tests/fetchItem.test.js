require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const xablau = {"accepts_mercadopago": true, "attributes": [{"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "BRAND", "name": "Marca", "value_id": null, "value_name": "Montado", "value_struct": null, "values": [{"id": null, "name": "Montado", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "DISPLAY_SIZE", "name": "Tamanho da tela", "value_id": "-1", "value_name": null, "value_struct": null, "values": [{"id": "-1", "name": null, "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "GTIN", "name": "Código universal de produto", "value_id": null, "value_name": "3000023615004", "value_struct": null, "values": [{"id": null, "name": "3000023615004", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "HDD_SIZE", "name": "Disco rígido", "value_id": "2932115", "value_name": "240 GB", "value_struct": {"number": 240, "unit": "GB"}, "values": [{"id": "2932115", "name": "240 GB", "struct": {"number": 240, "unit": "GB"}}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "ITEM_CONDITION", "name": "Condição do item", "value_id": "2230284", "value_name": "Novo", "value_struct": null, "values": [{"id": "2230284", "name": "Novo", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "MODEL", "name": "Modelo", "value_id": null, "value_name": "Core i5 3470 3.2ghz", "value_struct": null, "values": [{"id": null, "name": "Core i5 3470 3.2ghz", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "OPERATIVE_SYSTEM", "name": "Sistema operativo", "value_id": "345583", "value_name": "Windows 10", "value_struct": null, "values": [{"id": "345583", "name": "Windows 10", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "PROCESSOR_TYPE", "name": "Processador", "value_id": "345574", "value_name": "Intel Core i5", "value_struct": null, "values": [{"id": "345574", "name": "Intel Core i5", "struct": null}]}, {"attribute_group_id": "OTHERS", "attribute_group_name": "Outros", "id": "RAM_SIZE", "name": "RAM", "value_id": null, "value_name": "8 GB", "value_struct": {"number": 8, "unit": "GB"}, "values": [{"id": null, "name": "8 GB", "struct": {"number": 8, "unit": "GB"}}]}], "automatic_relist": false, "available_quantity": 1, "base_price": 1609, "buying_mode": "buy_it_now", "catalog_listing": false, "catalog_product_id": null, "category_id": "MLB1649", "channels": ["marketplace", "mshops"], "condition": "new", "coverage_areas": [], "currency_id": "BRL", "date_created": "2020-08-02T23:13:47.000Z", "deal_ids": [], "descriptions": [{"id": "MLB1615760527-2831583635"}], "differential_pricing": null, "domain_id": "MLB-DESKTOP_COMPUTERS", "health": 1, "id": "MLB1615760527", "initial_quantity": 678, "international_delivery_mode": "none", "last_updated": "2021-03-28T00:37:24.262Z", "listing_source": "", "listing_type_id": "gold_pro", "location": {}, "non_mercado_pago_payment_methods": [], "official_store_id": null, "original_price": null, "parent_item_id": null, "permalink": "https://produto.mercadolivre.com.br/MLB-1615760527-cpu-pc-torre-core-i5-3470-320ghz-8gb-ssd-240gb-com-nf-_JM", "pictures": [{"id": "601489-MLB42991126172_082020", "max_size": "850x800", "quality": "", "secure_url": "https://http2.mlstatic.com/D_601489-MLB42991126172_082020-O.jpg", "size": "500x470", "url": "http://http2.mlstatic.com/D_601489-MLB42991126172_082020-O.jpg"}, {"id": "678747-MLB42991129112_082020", "max_size": "520x550", "quality": "", "secure_url": "https://http2.mlstatic.com/D_678747-MLB42991129112_082020-O.jpg", "size": "472x500", "url": "http://http2.mlstatic.com/D_678747-MLB42991129112_082020-O.jpg"}, {"id": "868160-MLB42991129113_082020", "max_size": "668x932", "quality": "", "secure_url": "https://http2.mlstatic.com/D_868160-MLB42991129113_082020-O.jpg", "size": "358x500", "url": "http://http2.mlstatic.com/D_868160-MLB42991129113_082020-O.jpg"}], "price": 1609, "sale_terms": [{"id": "WARRANTY_TYPE", "name": "Tipo de garantia", "value_id": "2230280", "value_name": "Garantia do vendedor", "value_struct": null, "values": [{"id": "2230280", "name": "Garantia do vendedor", "struct": null}]}, {"id": "WARRANTY_TIME", "name": "Tempo de garantia", "value_id": null, "value_name": "6 meses", "value_struct": {"number": 6, "unit": "meses"}, "values": [{"id": null, "name": "6 meses", "struct": {"number": 6, "unit": "meses"}}]}], "secure_thumbnail": "https://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg", "seller_address": {"city": {"id": "BR-SP-44", "name": "São Paulo"}, "country": {"id": "BR", "name": "Brasil"}, "id": 618250284, "search_location": {"city": {"id": "TUxCQ1NQLTkxMjE", "name": "São Paulo Zona Sul"}, "neighborhood": {"id": "TUxCQlZJTHp5aDRu", "name": "Vila Água Funda"}, "state": {"id": "TUxCUFNBT085N2E4", "name": "São Paulo"}}, "state": {"id": "BR-SP", "name": "São Paulo"}}, "seller_contact": null, "seller_id": 298832663, "shipping": {"dimensions": null, "free_methods": [{"id": 100009, "rule": {"default": true, "free_mode": "country", "free_shipping_flag": true, "value": null}}], "free_shipping": true, "local_pick_up": false, "logistic_type": "xd_drop_off", "mode": "me2", "store_pick_up": false, "tags": ["self_service_in", "mandatory_free_shipping"]}, "site_id": "MLB", "sold_quantity": 500, "start_time": "2020-08-02T23:13:47.000Z", "status": "active", "stop_time": "2040-07-28T04:00:00.000Z", "sub_status": [], "subtitle": null, "tags": ["brand_verified", "good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible"], "thumbnail": "http://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg", "thumbnail_id": "601489-MLB42991126172_082020", "title": " Cpu Pc  Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf", "variations": [], "video_id": null, "warnings": [], "warranty": "Garantia do vendedor: 6 meses"};

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifica se fetchItem é uma função.', () => {
    const expectative = fetchItem();
    expect(typeof expectative).toBe('object');
  });

  it('Verifica x.', async () => {
    const expectative = await fetchItem('MLB1615760527');
    expect(expectative).toStrictEqual(xablau);
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
