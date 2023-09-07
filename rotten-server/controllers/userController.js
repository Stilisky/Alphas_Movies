const userService = require("../services/userService")

//Find All users function
exports.getAllUsers = async (req, res) => {
   try {
      const users = await userService.findAllusers();
      res.status(200).json(users);
   } catch (error) {
      res.status(400).json({ error })
   }
};

//Find one user by id
exports.getUserById = async (req, res) => {
   try {
      const user = await userService.findUserById(req.params.id)
      res.json(user)
   } catch (error) {
      res.status(400).json({ error })
   }
}

//create user
exports.saveUser = async (req, res) => {
   try {
      data = req.body
      const user = await userService.createUser(data);
      res.status(201).json(user)
   } catch (error) {
      res.status(400).json({ error })
   }
}

exports.updateUser = async (req, res) => {
   try {
      const user = await userService.updateUser(req.params.id, req.body)
      res.status(200).json({ message: 'Account updated successfully'});
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
      console.log(user)
   }
};

exports.updateUserPassword = async(req, res) => {
   try {
   const user = await userService.updateUserPassword(req.params.id, req.body)
   console.log(user)
   res.status(200).json({ message: 'Account updated successfully'});
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
   }
};



//get user favorites list
exports.Myfavorites = async (req, res) => {
   const user = await userService.findUserById(req.params.id)
   const favorites = user.favorites
   res.json(favorites)
}

//delete user
exports.deleteUser = async (req, res) => {
   try {
      await userService.deleteUser(req.params.id)
      res.json({ message: "User has been delet !" })
   } catch (error) {
      res.status(400).json({ error })
   }
}