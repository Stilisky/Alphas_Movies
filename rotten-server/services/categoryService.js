const categoryModel = require("../models/Category")

exports.findCategories = async () => {
   return await categoryModel.find();
}

exports.findCategoryById = async (id) => {
   return await categoryModel.findById(id).populate("movies")
}

exports.totalCats = async () => {
   return await categoryModel.countDocuments()
}

exports.createCategory = async (category) => {
   const newCat = new categoryModel(category)
   return await newCat.save()
}

exports.deleteCategory = async (id) => {
   return await categoryModel.findByIdAndDelete(id)
}

exports.updateCategory = async (id, cat) => {
   return await categoryModel.findByIdAndUpdate(id, cat)
}