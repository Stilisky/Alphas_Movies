const userModel = require("../models/User")

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
   return await userModel.findById(id)
}

exports.updateUser = async (id, user) => {
   return await userModel.findByIdAndUpdate(id, user)
}

exports.deleteUser = async (id) => {
   return await userModel.findByIdAndDelete(id)
}