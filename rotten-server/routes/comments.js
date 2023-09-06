var express = require('express');
var router = express.Router();
const {deleteComment, getComment, getComments,saveComment} = require("../controllers/commentController")

router.route("/").get(getComments).post(saveComment)
router.route("/:id").get(getComment).delete(deleteComment)

module.exports = router;