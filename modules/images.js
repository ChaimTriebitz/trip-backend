const mongoose = require('mongoose');

const Schema = mongoose.Schema

const imageSchema = new mongoose.Schema({
   filename: String,
   path: String,
   createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Image', imageSchema)
