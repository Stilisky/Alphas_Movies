const likeModel = require("../models/like")

exports.createLike = async (like) => {
   const newlike = new likeModel(like)
   return await newlike.save()
}

exports.findLikeById = async (id) => {
   const like = await likeModel.findById(id)
   return like
}
 
exports.deleteLike = async (id) => {
   return await likeModel.findByIdAndDelete(id)
}