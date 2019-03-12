const Products = require('../products.js');
let products = new Products();
const mongoose = require('mongoose');
const supergoose = require('./supergoose.test.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {
  it('can post() a new product', () => {
    let obj = {
      name:'Mouse',
      description:'works good',
      price:9.99,
      category:'electronics'
    };
    return products.post(obj)
    .then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
        console.log('KEY: ', key );
      });
    });
  });

  it('can get() a product', () => {
    let obj = {
      name:'Mouse',
      description:'works good',
      price:9.99,
      category:'electronics'
    };
    return products.post(obj)
    .then(record => {
      return products.get(record._id)
      .then(product => {
        Object.keys(obj).forEach(key => {
          expect(product[0][key]).toEqual(obj[key]);
        });
      });
    });
  });

});
