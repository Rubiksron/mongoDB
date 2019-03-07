'use strict';

const express = require('express');

const Categories = require('../models/categories.js');
const categories = new Categories();

const router = express.Router();

// ROUTES
router.get('/categories', getCategories);
router.post('/categories', postCategory);

router.get('/categories/:id', getCategory);
router.put('/categories/:id', putCategory);
router.delete('/categories/:id', deleteCategory);

// FUNCTIONS
function getCategories(request,response,next) {
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getCategory(request,response,next) {
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function postCategory(request,response,next) {
  categories.post(request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}


function putCategory(request,response,next) {
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function deleteCategory(request,response,next) {
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
