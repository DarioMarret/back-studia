const router = require('express').Router()

const upload = require('../libs/storage')

const VerificarToken  = require('../controller/token/verificacion');
const {createProducto, getProducto, deleteProductoById, updateProductoByid} = require('../controller/producto.controller')

router.post('/producto',upload.single("imagen"), createProducto)
router.get('/producto/lista', getProducto)
router.delete('/producto/eliminar/:_id', deleteProductoById)
router.put("/producto/:_id", upload.single("imagen"), updateProductoByid)

module.exports = router