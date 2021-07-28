const router = require('express').Router()
// const VerificarToken  = require('../controller/token/verificacion
const {createCategoria, getCategoria, deleteCategoriaById, updateCategoriaByid} = require('../controller/categoria.controller')

router.post('/categoria', createCategoria)
router.get('/categoria/lista', getCategoria)
router.delete('/categoria/eliminar/:_id', deleteCategoriaById)
router.put('/categoria/:_id', updateCategoriaByid)

module.exports = router