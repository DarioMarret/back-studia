const router = require('express').Router()

const  VerificarToken  = require('../controller/token/verificacion')
const { captuarPago } = require('../controller/pago.controller')

router.post('/api/pago', VerificarToken,captuarPago )
// router.post('/usuario', createUsuario)

module.exports = router