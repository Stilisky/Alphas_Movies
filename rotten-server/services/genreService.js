const genreModel = require("../models/Genre")

exports.findGenres = async () => {
   return await genreModel.find();
}

exports.findGenreById = async (id) => {
   return await genreModel.findById(id).populate("movies")
}

exports.createGenre = async (genre) => {
   const newGenre = new genreModel(...genre)
   return await newGenre.save()
}

exports.deleteGenre = async (id) =>  {
   return await genreModel.findByIdAndDelete(id)
}