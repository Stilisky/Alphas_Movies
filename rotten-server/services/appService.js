const userService = require("../services/userService")
const movieService = require("../services/movieService")
const likeService = require("../services/likeService")
const genreService = require("../services/genreService")
const commentService = require("../services/commentService")
const categoryService = require("../services/categoryService")

exports.addFavoriteToUser = async (userid, movid) => {
   const user = await userService.findUserById(userid)
   const movie = await movieService.findMovieById(movid)
   user.favorites.push(movie)
   const upuser = await userService.updateUser(userid, user)
   return upuser;
}

exports.addLikeToMovie = async (likeid, movid) => {
   const like = await likeService.findLikeById(likeid)
   const movie = await movieService.findMovieById(movid)
   movie.likes.push(like)
   const upmov = await movieService.updateMovie(movid, movie)
   return upmov
}

exports.addcommentToMovie = async (comid, movid) => {
   const comment = await commentService.findCommentById(comid)
   const movie = await movieService.findMovieById(movid)
   movie.comments.push(comment)
   const upmov = await movieService.updateMovie(movid, movie)
   return upmov
}

exports.createCommentAndAddToMovie = async (movieid, comment) => {
   const com = await commentService.createComment(comment)
   const movie = await this.addcommentToMovie(com._id, movieid)
   return movie
}

exports.addCategoryToMovie = async (catid, movid) => {
   const cat = await categoryService.findCategoryById(catid)
   const movie = await movieService.findMovieById(movid)
   movie.category.push(cat)
   const upmov = await movieService.updateMovie(movid, movie)
   return upmov
}

exports.addMovieToCategory = async (movid, catid) => {
   const cat = await categoryService.findCategoryById(catid)
   const movie = await movieService.findMovieById(movid)
   cat.movies.push(movie)
   const upcat = await categoryService.updateCategory(catid, cat)
   return upcat
}

exports.addGenreToMovie = async (genid, movid) => {
   const genre = await genreService.findGenreById(genid)
   const movie = await movieService.findMovieById(movid)
   movie.genre = genre
   const upmov = await movieService.updateMovie(movid, movie)
   return upmov
}

exports.addMovieToGenre = async (movid, genid) => {
   const genre = await genreService.findGenreById(genid)
   const movie = await movieService.findMovieById(movid)
   genre.movies.push(movie)
   const upgen = await genreService.updateGenre(genid, genre)
   return upmov
}