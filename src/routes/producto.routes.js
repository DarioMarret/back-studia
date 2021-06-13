const router = require('express').Router()

const VerificarToken  = require('../controller/token/verificacion');
const {createProducto, getProducto} = require('../controller/producto.controller')

router.post('/producto', createProducto)
router.get('/producto/lista', VerificarToken, getProducto)

module.exports = router