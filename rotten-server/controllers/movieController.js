const movieService = require("../services/movieService")

//all movies
exports.getMovies = async (req, res) => {
   try {
      const movies =  await movieService.findAllMovies();
      res.json(movies)
   } catch (error) {
      res.status(400).json({error})
   }
}

// movie by id
exports.getMovieById = async (req, res) => {
   try {
      const movie =  await movieService.findMovieById(req.params.id);
      res.json(movie)
   } catch (error) {
      res.status(400).json({error})
   }
}

//new movie
exports.createMovie = async (req, res) => {
   try {
      const movie = await movieService.createMovies(req.body)
      res.json(movie)
   } catch (error) {
      res.status(400).json({error})
   }
}

//Delete Movies
exports.deleteMovie = async (req, res) => {
   try {
      const mov = await movieService.deletMovie(req.params.id)
      res.json(mov)
   } catch (error) {
      res.status(400).json({error})
   }
}