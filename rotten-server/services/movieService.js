const movieModel = require("../models/Movie")

exports.findAllMovies = async () => {
   return await movieModel.find().populate("genre");
}

exports.totalMovies = async () => {
   return await movieModel.countDocuments()
}

exports.createMovies = async (movie) => {
   const newMovie = new movieModel(movie)
   return await newMovie.save();
}

exports.findMovieById = async (id) => {
   return await movieModel.findById(id).populate("fans").populate("category").populate("comments").populate("genre")
}

exports.updateMovie = async (id, movie) => {
   return await movieModel.findByIdAndUpdate(id, movie)
}

exports.deletMovie = async (id) => {
   return await movieModel.findByIdAndDelete(id)
}