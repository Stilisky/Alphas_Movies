var express = require('express');
var router = express.Router();
const {getMovieById, getMovies, createMovie, deleteMovie} = require("../controllers/movieController")

router.route("/").get(getMovies).post(createMovie)
router.route("/:id").get(getMovieById).delete(deleteMovie)

module.exports = router;