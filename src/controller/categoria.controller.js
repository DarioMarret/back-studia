const Categoria = require('../model/Categoria');

const createCategoria = async(req, res)=>{
    const n_producto = new Categoria(req.body);
    const resultado = await n_producto.save()
    res.status(201).json(resultado)
}

const getCategoria = async(req, res)=>{
    const categoria = await Categoria.find();
    res.status(201).json(categoria)
}

const updateCategoriaByid = async (req, res)=>{
    console.log(req.params, req.body);
    const categoria = await Categoria.findByIdAndUpdate(req.params, req.body)
    res.status(200).json(categoria)
}

const deleteCategoriaById = async(req, res)=>{
    console.log(req.params);
    const categoria = await Categoria.findByIdAndDelete(req.params._id)
    res.status(200).json(categoria)
}

module.exports = {
    createCategoria,
    getCategoria,
    updateCategoriaByid,
    deleteCategoriaById
}