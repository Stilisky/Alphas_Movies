var express = require('express');
var router = express.Router();
const {categoryToMovie, commentToMovie, favoriteToUser, genreToMovies, likeToMovie, movieToCategory, moviesToGenre, getKpi, createcommentAndAddToMovie, register, login, checkUserFavorite, mapMovies} = require('../controllers/appController')
const {getUserByToken, authUser} = require("../middleware/authmiddleware")

router.route('/category/:catid/movie/:movieid').get(categoryToMovie)
router.route('/movie/:movieid/category/:catid').get(movieToCategory)
router.route('/comment/:commentid/movie/:movieid').get(commentToMovie)
router.route('/favorite/:userid/movie/:movieid').get(favoriteToUser)
router.route('/genre/:genreid/movie/:movieid').get(genreToMovies)
router.route('/kpi').get(getKpi)
router.route('/movies').post(mapMovies)
router.route('/movie/:movieid/comment').post(createcommentAndAddToMovie)
//Login and register
router.route('/register').post(register)
router.route('/login').post(login)
//Get user By Token
router.route('/token').get(getUserByToken)
//Check favorite
router.route('/checkfavorite/:userid/movie/:movieId').get(authUser, checkUserFavorite)

module.exports = router;