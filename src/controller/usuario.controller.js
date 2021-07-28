const Usuario = require("../model/Usuario");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const key = require("../constante/key");

//funcion para crear nievo usuario
const createUsuario = async (req, res) => {
  try {
    const n_usuario = new Usuario(req.body);
    let passHash = await bcrypt.hash(n_usuario.password, 8)
    n_usuario.password = passHash;
    const resultado = await n_usuario.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(501).json(error);
  }
};
//listart todo los usuario
const getUsuario = async(req, res) => {
  const user = await Usuario.find({});
  res.json(user);
};
// listar usuario por ById o login
const getUsuarioById = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
  } else {
    const user = await Usuario.find({"email":req.body.email});
    if (user.length > 0) {
      await bcrypt.compare(req.body.password, user.password, ()=>{
        const token = jwt.sign({ user }, key.token_secret);
        res.json({ token });
      })
    } else {
      res.status(404).json({
        message: "usuario no registrado",
      });
    }
  }
};
const usuarioPerfil = async(req, res) => {
    const rest = await Usuario.findById(req.body)
    res.json(rest)
};
const updateUsuario = async (req, res) => {
    console.log(req.params);
    const result = await Usuario.findByIdAndUpdate(req.params, req.body)
    console.log(result)
}
const deleteUsuarioById = async(req, res) => {
  const result = await Usuario.findByIdAndDelete(req.params.id)
  res.status(200).json(result)
};
module.exports = {
  createUsuario,
  getUsuario,
  updateUsuario,
  getUsuarioById,
  deleteUsuarioById,
  usuarioPerfil,
};
