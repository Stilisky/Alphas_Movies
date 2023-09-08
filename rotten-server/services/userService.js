const userModel = require("../models/User")
const bcrypt = require('bcrypt');

exports.findAllusers = async () => {
   return await userModel.find();
}

exports.totalUsers = async () => {
   return await userModel.countDocuments()
}

exports.createUser = async (user) => {
   const newUser = new userModel(user)
   return await newUser.save();
}

exports.findUserById = async (id) => {
   return await userModel.findById(id).populate("favorites")
}

// Function to update a user's account details
exports.updateUser = async (id, user) => {
   return await userModel.findByIdAndUpdate(id, user)
}

exports.deleteUser = async (id) => {
   return await userModel.findByIdAndDelete(id)
}

exports.updateUserPassword = async(id, incoming)=> {
   user = await userModel.findById(id)
   if (user.password == incoming.oldPassword) { 
      user.password = incoming.newPassword
      return await userModel.findByIdAndUpdate(id, user)
   }
}

// exports.updateUserPassword = async(id, incoming)=> {
//    const user = await userModel.findById(id)
//    const isOldPasswordValid = await bcrypt.compare(user.password, incoming.oldPassword)
//    if (isOldPasswordValid) {
//       const newPassword = incoming.newPassword
//       hashedNewPassword = await bcrypt.hash(newPassword, 10)
//       user.password = hashedNewPassword
//       return await userModel.findByIdAndUpdate(id, user)
//    }
// }
