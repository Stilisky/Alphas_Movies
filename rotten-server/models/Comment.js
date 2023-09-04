const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
   description: {type:String},
   movie: {type: mongoose.Schema.Types.ObjectId, ref:'Movie'},
   user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
})

module.exports = mongoose.model('Comment', commentSchema)