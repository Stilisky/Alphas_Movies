var express = require('express');
var router = express.Router();
const {categoryToMovie, commentToMovie, favoriteToUser, genreToMovies, likeToMovie, movieToCategory, moviesToGenre, getKpi, createcommentAndAddToMovie} = require('../controllers/appController')

router.route('/category/:catid/movie/:movieid').get(categoryToMovie)
router.route('/movie/:movieid/category/:catid').get(movieToCategory)
router.route('/comment/:commentid/movie/:movieid').get(commentToMovie)
router.route('/favorite/:userid/movie/:movieid').get(favoriteToUser)
router.route('/genre/:genreid/movie/:movieid').get(genreToMovies)
router.route('/kpi').get(getKpi)
router.route('/movie/:movieid/comment').post(createcommentAndAddToMovie)

module.exports = router;