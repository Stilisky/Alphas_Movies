const commentService = require("../services/commentService")

exports.getComments = async (req, res) => {
   try {
      const comments = await commentService.findAllComments()
      res.json(comments)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.getComment = async (req, res) =>{
   try {
      const comment = await commentService.findCommentById(req.params.id)
      res.json(comment)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.saveComment = async (req, res) => {
   try {
      const comment = await commentService.createComment(req.body)
      res.json(comment)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.deleteComment = async (req, res) => {
   try {
      await commentService.deleteComment(req.params.id)
      res.json({message: "Comment delete successfully !"})
   } catch (error) {
      res.status(400).json({error})
   }
}