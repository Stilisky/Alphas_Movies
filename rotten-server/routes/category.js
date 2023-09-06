var express = require('express');
var router = express.Router();
const {deleteCategory, getCategories, getCategory, saveCategory} = require("../controllers/categoryController")

router.route('/').get(getCategories).post(saveCategory)
router.route("/:id").get(getCategory).delete(deleteCategory)

module.exports = router;