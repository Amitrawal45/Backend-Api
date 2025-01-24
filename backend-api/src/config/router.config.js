const router = require("express").Router();
const authRouter = require("../modules/auth/auth.router");
const categoryRouter = require('../modules/category/category.router')

router.use(authRouter);
router.use(categoryRouter)

module.exports = router;
