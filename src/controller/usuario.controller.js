const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");
const key = require("../constante/key");

//funcion para crear nievo usuario
const createUsuario = async (req, res) => {
  try {
    const n_usuario = new Usuario(req.body);
    const resultado = await n_usuario.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(501).json(error);
  }
};
//listart todo los usuario
const getUsuario = (req, res) => {};
// listar usuario por ById o login
const getUsuarioById = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
  } else {
    const user = await Usuario.find(req.body);
    if (user.length > 0) {
      const token = jwt.sign({ user }, key.token_secret);
      res.json({ token });
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
const deleteUsuarioById = (req, res) => {};
module.exports = {
  createUsuario,
  getUsuario,
  updateUsuario,
  getUsuarioById,
  deleteUsuarioById,
  usuarioPerfil,
};
