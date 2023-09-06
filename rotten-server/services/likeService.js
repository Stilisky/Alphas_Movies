const likeModel = require("../models/like")

exports.createLike = async (like) => {
   const newlike = new likeModel(like)
   return await newlike.save()
}

exports.deleteLike = async (id) => {
   return await likeModel.findByIdAndDelete(id)
}