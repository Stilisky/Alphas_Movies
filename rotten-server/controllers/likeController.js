const likeService = require("../services/likeService")

exports.createLike = async (req, res) => {
   try {
      const like = await likeService.createLike(req.body)
      res.json(like)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.deleteLike = async (req, res) =>  {
   try {
      await likeService.deleteLike(req.params.id)
      res.json({message: "User has been delet !"})
   } catch (error) {
      res.status(400).json({error})
   }
}