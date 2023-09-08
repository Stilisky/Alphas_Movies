var express = require('express');
var router = express.Router();
const { getAllUsers, getUserById, saveUser, updateUser, deleteUser, updateUserPassword } = require("../controllers/userController")
const {auth, authUser} = require("../middleware/authmiddleware")

/* GET users listing. */
router.route('/').get(authUser,getAllUsers).post(saveUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)
router.route('/password/:id').put(updateUserPassword)
// });

module.exports = router;
