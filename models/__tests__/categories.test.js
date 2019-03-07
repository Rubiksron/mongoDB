const Categories = require('../categories.js');
let categories = new Categories();

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let obj = {name:'Test Categories'};
    return categories.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[0][key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e) );
  });

  it('can get() a category', () => {
    let obj = {name:'Test Categories 2'};
    return categories.post(obj)
      .then(record => {
        return categories.get(record[0].id)
          .then(category => {
            Object.keys(obj).forEach(key =>{
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
