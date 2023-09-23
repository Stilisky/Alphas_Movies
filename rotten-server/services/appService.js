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

exports.checkFavoris = async (userid, movieid) => {
   const user = await userService.findUserById(userid)
   const movie = await movieService.findMovieById(movieid)
   if(user.favorites.includes(movie)) {
      return true
   } else {
      return false
   }
}

exports.createCommentAndAddToMovie = async (movieid, comment) => {
   const com = await commentService.createComment(comment)
   const movie = await this.addcommentToMovie(com._id, movieid)
   return movie
}

exports.addCategoryToMovie = async (catid, movid) => {
   const cat = await categoryService.findCategoryById(catid)
   const movie = await movieService.findMovieById(movid)
   movie.category = cat
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
   return upgen
}

exports.kpi = async () => {
   userT = await userService.totalUsers()
   movieT = await movieService.totalMovies()
   likeT = await likeService.totalLikes()
   genreT = await genreService.totalGenres()
   commentT = await commentService.TotalComments()
   cateT = await categoryService.totalCats()
   const data = {
      'user' : userT,
      'movie': movieT,
      'like': likeT,
      'genre': genreT,
      'comment': commentT,
      'category': cateT 
   }
   return data
}

exports.unfavorite = async (userid, movieid) => {
   const user = await userService.findUserById(userid)
   user.favorites = user.favorites.filter((mov) => {
      return mov._id.toString() !== movieid
   })
   const upuser = await userService.updateUser(userid, user)
   return upuser
}

exports.newlike = async (userid, movieid) => {
   const user = await userService.findUserById(userid)
   const movie = await movieService.findMovieById(movieid)
   const like = await likeService.createLike({movie,user})
   this.addLikeToMovie(like._id, movie._id)
   return like
}

exports.moviesMapping = async (data) => {
   const cat =data.catName;
   const gen = data.genre;
   const mov = {
      "title": data.title,
      "description": data.description,
      "language": data.language,
      "release_date": data.release_date,
      "image": data.image,
      "director": data.director
   }
   // const existingUser = await userModel.findOne({ email: email });
   const movie = await movieService.createMovies(mov);

   //Cat and movie mapping
   const categ = await categoryService.findCatByName(cat)
   this.addCategoryToMovie(categ._id, movie._id);
   this.addMovieToCategory(movie._id, categ._id);

   //Genre and movie Mapping
   const genre = await genreService.findGenreByName(gen);

   if(genre){
      this.addGenreToMovie(genre._id, movie._id)
      this.addMovieToGenre(movie._id, genre._id)
   } else {
      const newgenre = await genreService.createGenre({"name": gen})
      this.addGenreToMovie(newgenre._id, movie._id)
      this.addMovieToGenre(movie._id, newgenre._id)
   }

   return movie;
}