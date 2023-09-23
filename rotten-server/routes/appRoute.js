var express = require('express');
var router = express.Router();
const {categoryToMovie, commentToMovie, favoriteToUser, genreToMovies, likeToMovie, movieToCategory, moviesToGenre, getKpi, createcommentAndAddToMovie, register, login, checkUserFavorite, mapMovies, unFavorite} = require('../controllers/appController')
const {getUserByToken, authUser} = require("../middleware/authmiddleware")

router.route('/category/:catid/movie/:movieid').get(authUser, categoryToMovie)
router.route('/movie/:movieid/category/:catid').get(authUser, movieToCategory)
router.route('/comment/:commentid/movie/:movieid').get(authUser, commentToMovie)
router.route('/favorite/:userid/movie/:movieid').get(authUser, favoriteToUser)
router.route('/genre/:genreid/movie/:movieid').get(authUser, genreToMovies)
router.route('/kpi').get(getKpi)
router.route('/movies').post(mapMovies)
router.route('/movie/:movieid/comment').post(authUser, createcommentAndAddToMovie)
//Login and register
router.route('/register').post(register)
router.route('/login').post(login)
//Get user By Token
router.route('/token').get(getUserByToken)
//Check favorite
router.route('/checkfavorite/:userid/movie/:movieId').get(authUser, checkUserFavorite)
router.route('/newlike/:movieid').post(authUser, likeToMovie)
router.route('/unfavorite/:movieid').get(authUser, unFavorite)

module.exports = router;