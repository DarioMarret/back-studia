const router = require('express').Router()

const  VerificarToken  = require('../controller/token/verificacion')
const {createUsuario, getUsuarioById} = require('../controller/usuario.controller')

router.post('/usuario', createUsuario)
router.post('/usuario/login', getUsuarioById)
// router.post('/usuario', createUsuario)

module.exports = router