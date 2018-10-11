var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//table
var GenreSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100 },
  }
);

// Virtual
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/Genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);