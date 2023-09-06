const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
   name: String,
   movies: [{type: mongoose.Schema.Types.ObjectId, ref:'Movie'}],
})

module.exports = mongoose.model('Genre', genreSchema)