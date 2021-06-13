const Usuario = require('../model/Usuario');
const jwt = require('jsonwebtoken');
const key = require('../constante/key');

//funcion para crear nievo usuario
const createUsuario = async(req, res)=>{
    const n_usuario = new Usuario(req.body);
    // console.log(n_usuario)
    const resultado = await n_usuario.save()
    res.status(201).json(resultado)
}
//listart todo los usuario
const getUsuario = (req, res)=>{
    
}
// listar usuario por ById o login
const getUsuarioById = async(req, res)=>{
    if(req.params.id){
        console.log(req.params.id);
    }else{
        const login_token = await Usuario.find(req.body)
        if(login_token.length > 0){
            const token = jwt.sign({login_token}, key.token_secret)
            res.json({token})
        }else{
            res.status(404).json({
                message:"usuario no registrado"
            })
        }
    }
}
const updateUsuarioByid = (req, res)=>{
    
}
const deleteUsuarioById = (req, res)=>{
    
}
module.exports = {
    createUsuario,
    getUsuario,
    getUsuarioById,
    updateUsuarioByid,
    deleteUsuarioById
}