const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
   title: {type: String, require: true},
   description: {type: String, require: true},
   language: {type: String, require: true},
   release_date: {type: Date, require: true},
   image: {type: String},
   fans: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
   category: {type: mongoose.Schema.ObjectId, ref:'Category'},
   genre: {type: mongoose.Schema.ObjectId, ref:'Genre'},
   comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}],
   likes: [{type: mongoose.Schema.Types.ObjectId, ref:'Like'}]
});

module.exports = mongoose.model('Movie', movieSchema);