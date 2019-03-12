'use strict';

const express = require('express');

const Products = require('../models/products.js');
const products = new Products();

const router = express.Router();

// ROUTES
router.get('/products', getProducts);
router.post('/products', postProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', putProducts);
router.delete('/products/:id', deleteProducts);

// FUNCTIONS
function getProducts(request,response,next) {
  products.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .then( () => console.log('--hello from getProducts--'))
    .catch( next );
}

function getProduct(request,response,next) {
  products.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .then( () => console.log('--hello from getProduct!--') )
    .catch( next );
}

function postProducts(request,response,next) {
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .then( () => console.log('--hello from postProducts!--') )
    .catch( next );
}


function putProducts(request,response,next) {
  products.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .then( () => console.log('--hello from putProducts!--') )
    .catch( next );
}

function deleteProducts(request,response,next) {
  products.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .then( () => console.log('--hello from deleteProducts!--') )
    .catch( next );
}

module.exports = router;
