const categoryModel = require("../models/Category")

exports.findCategories = async () => {
   return await categoryModel.find();
}

exports.createCategory = async (category) => {
   const newCat = new categoryModel(...category)
   return await newCat.save()
}

exports.deleteCategory = async (id) => {
   return await categoryModel.findByIdAndDelete(id)
}