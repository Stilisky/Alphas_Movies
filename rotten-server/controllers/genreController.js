const genreService = require("../services/genreService")

exports.getGenres = async (req, res) => {
   try {
      const genres = await genreService.findGenres()
      res.json(genres)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.getGenre = async (req, res) => {
   try {
      const genre = await genreService.findGenreById(req.params.id)
      res.json(genre)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.saveGenre = async (req, res) => {
   try {
      const genre = genreService.createGenre(req.body)
      res.json(genre)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.deleteGenre = async (req, res) => {
   try {
      await genreService.deleteGenre(req.params.id)
      res.json({message: 'Success Deleted !'})
   } catch (error) {
      res.status(400).json({error})
   }
}