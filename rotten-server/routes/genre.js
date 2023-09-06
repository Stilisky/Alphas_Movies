var express = require('express');
var router = express.Router();
const {deleteGenre, getGenre, getGenres,saveGenre} = require('../controllers/genreController')

router.route("/").get(getGenres).post(saveGenre)
router.route("/:id").get(getGenre).delete(deleteGenre)

module.exports = router;