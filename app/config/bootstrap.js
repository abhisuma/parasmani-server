const mongoose = require('mongoose');

// mongoose.connect(`mongodb://localhost:27017`);
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
require('../models');
require('./passport');

module.exports = {
  mongoose,
}
