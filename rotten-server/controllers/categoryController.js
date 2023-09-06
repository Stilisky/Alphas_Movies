const categoryService = require("../services/categoryService")

exports.getCategories = async (req, res) => {
   try {
      const categories = await categoryService.findCategories()
      res.json(categories)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.getCategory = async (req, res) => {
   try {
      const cat = await categoryService.findCategoryById(req.params.id)
      res.json(cat)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.saveCategory = async (req, res) => {
   try {
      const cat = await categoryService.createCategory(req.body)
      res.json(cat)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.deleteCategory = async (req, res) => {
   try {
      await categoryService.deleteCategory(req.params.id)
      res.json({message: "Category deleted !"})
   } catch (error) {
      res.status(400).json({error})
   }
}