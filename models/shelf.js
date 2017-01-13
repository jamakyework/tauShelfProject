var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShelfSchema = new Schema({
  user: String,
  description: String,
  imageUrl: String
});

var shelf = mongoose.model('items', ShelfSchema);
module.exports = shelf;
