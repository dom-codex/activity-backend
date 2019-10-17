const mongoose = require('mongoose');

const receipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  prepareTime: { type: Number, required: true },
  difficulty: { type: Number, required: true },
});

module.exports = mongoose.model('Receipe', receipeSchema);