const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   username: {type: String, require: true},
   password: {type: String, require: true},
   email: {type: String, require: true},
   isAdmin: {type: Boolean, default: false},
   favorites: [{type: mongoose.Schema.Types.ObjectId, ref:'Movie'}],
   likes: [{type: mongoose.Schema.Types.ObjectId, ref:'Like'}]
})

module.exports = mongoose.model('User', userSchema)