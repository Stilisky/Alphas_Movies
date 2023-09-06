var express = require('express');
var router = express.Router();
const { getAllUsers, getUserById, saveUser, updateUser, deleteUser } = require("../controllers/userController")

/* GET users listing. */
router.route('/').get(getAllUsers).post(saveUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
