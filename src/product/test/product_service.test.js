const ProductClient = require('../product_client');
const ProductService = require('../product_service');
jest.mock('../product_client');

describe('ProductService', () => {
    const fetchItems = jest.fn(async () => [
            {item: 'milk', available: true},
            {item: 'banana', available: false},
        ]);

    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    });

    let productService;

    beforeEach(() => {
        productService = new ProductService();
    });

    it('test', async () => {
        const items = await productService.fetchAvailableItems();

        expect(items.length).toBe(1);
        expect(items).toEqual([{item: 'milk', available: true}])
    });
});