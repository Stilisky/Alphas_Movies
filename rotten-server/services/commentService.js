const commentModel = require("../models/Comment")

exports.findAllComments = async() => {
   return await commentModel.find()
}

exports.TotalComments = async() => {
   return await commentModel.countDocuments()
}

exports.findCommentById = async (id) => {
   return await commentModel.findById(id).populate("movie").populate("user")
}

exports.createComment = async (comment) => {
   const newCom = new commentModel(comment)
   return await newCom.save()
}

exports.deleteComment = async (id) => {
   return await commentModel.findByIdAndDelete(id);
}