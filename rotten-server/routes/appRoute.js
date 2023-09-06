var express = require('express');
var router = express.Router();
const {categoryToMovie, commentToMovie, favoriteToUser, genreToMovies, likeToMovie, movieToCategory, moviesToGenre} = require('../controllers/appController')

router.route('/category/:catid/movie/:movieid').get(categoryToMovie)
router.route('/comment/:commentid/movie/:movieid').get(commentToMovie)
router.route('/favorite/:userid/movie/:movieid').get(favoriteToUser)
router.route('/genre/:genreid/movie/:movieid').get(genreToMovies)
router.route('')

module.exports = router;