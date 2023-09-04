const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
   name: String,
   movies: [{type: mongoose.Schema.Types.ObjectId, ref:'Movie'}],
})

module.exports = mongoose.model('Category', categorySchema)