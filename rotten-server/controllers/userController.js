const {User} = require('../models/User') //Get User Model

//Find All users function
exports.getAllUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.json(users)
   } catch (error) {
      res.status(400).json({error})
   }
};

//Find one user by id
exports.getUserById = async (req, res) => {
   try {
      const user = await User.findOne()
   } catch (error) {
      
   }
}