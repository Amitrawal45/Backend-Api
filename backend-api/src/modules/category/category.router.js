const categoryRouter = require('express').Router()
const { loginCheck } = require('../../middleware/auth.middleware')
const categoryController = require('../category/category.controller')

categoryRouter.post('/category',loginCheck,categoryController.createCategory)
categoryRouter.get('/getAllCategory',loginCheck,categoryController.getAllCategory)
categoryRouter.get('/category/categoryId',loginCheck,categoryController.getCategoryById)
categoryRouter.put('/category/categoryId',loginCheck,categoryController.updateCategory)
categoryRouter.delete('/category/categoryId',loginCheck,categoryController.deleteCategory)

module.exports = categoryRouter