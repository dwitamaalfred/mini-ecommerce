const router = require('express').Router()
const UserRoutes = require('./user')
const ProductRoutes = require('./product')

router.use('/users', UserRoutes)
router.use('/products', ProductRoutes)

module.exports = router