'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions);

require('./src/app.js').start(PORT);
