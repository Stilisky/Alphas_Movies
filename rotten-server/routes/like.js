var express = require('express');
var router = express.Router();
const {createLike, deleteLike} = require("../controllers/likeController")

router.route("/").post(createLike)
router.route("/:id").delete(deleteLike)

module.exports = router;