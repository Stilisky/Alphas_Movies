var express = require('express');
var router = express.Router();
const { getAllUsers, getUserById, saveUser, updateUser, deleteUser, updateUserPassword } = require("../controllers/userController");

/* GET users listing. */
router.route('/').get(getAllUsers).post(saveUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)
router.route('/password/:id').put(updateUserPassword)
// });

module.exports = router;
