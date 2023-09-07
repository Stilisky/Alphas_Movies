const appService = require("../services/appService")

exports.favoriteToUser = async (req, res) => {
   try {
      const user = await appService.addFavoriteToUser(req.params.userid, req.params.movieid)
      res.status(200).json(user)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.likeToMovie = async (req, res) => {
   try {
      const movie = await appService.addLikeToMovie(req.params.likeid, req.params.movieid)
      res.status(200).json(movie)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.commentToMovie = async (req, res) => {
   try {
      const movie = await appService.addcommentToMovie(req.params.commentid, req.params.movieid)
      res.json(movie) 
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.categoryToMovie = async (req, res) => {
   try {
      const movie = await appService.addCategoryToMovie(req.params.catid, req.params.movieid)
      await appService.addMovieToCategory(req.params.movieid, req.params.catid)
      res.json(movie)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.movieToCategory = async (req, res) => {
   try {
      const cat = await appService.addMovieToCategory(req.params.movieid, req.params.catid)
      res.json(cat)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.genreToMovies = async (req, res) => {
   try {
      const mov = await appService.addGenreToMovie(req.params.genreid, req.params.movieid)
      res.json(mov)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.moviesToGenre = async (req, res) => {
   try {
      const gen = await appService.addGenreToMovie(req.params.movieid, req.params.genreid)
      res.json(gen)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.getKpi = async (req, res) => {
   try {
      const data = await appService.kpi()
      res.json(data)
   } catch (error) {
      res.status(400).json({error})
   }
}