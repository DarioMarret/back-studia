const Producto = require('../model/Porductos');

const createProducto = async(req, res)=>{
    const n_producto = new Producto(req.body);
    const resultado = await n_producto.save()
    res.status(201).json(resultado)
}
const getProducto = async(req, res)=>{
    const productos = await Producto.find();
    res.status(201).json(productos)
}
const getroductoById = (req, res)=>{
    
}
const updateProductoByid = (req, res)=>{
    
}
const deleteProductoById = (req, res)=>{
    
}
module.exports = {
    createProducto,
    getProducto,
    getroductoById,
    updateProductoByid,
    deleteProductoById
}