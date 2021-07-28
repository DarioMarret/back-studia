const Producto = require('../model/Porductos');
const fs = require("fs").promises;
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name:"bmcdigomarret",
    api_key:"318616746291131",
    api_secret:"5rxJB6RXHVEc7r02_8Sg-hnHWqk"
    // cloud_name:"nova1234",
    // api_key:"856418865217119",
    // api_secret:"YFitakLnuVs5mauhty7wvdr2oZY"
})

const createProducto = async(req, res)=>{
    if(req.file){
        const resultPath = await cloudinary.v2.uploader.upload(req.file.path)
        req.body.imagen = resultPath.secure_url;
        console.log("resultPath", resultPath.original_filename) 
        fs.unlink("./src/img/"+resultPath.original_filename+"."+resultPath.format)
        .then(() => {
            console.log("File removed");
        }).catch((err) => {
            console.error("Something wrong happened removing the file", err);
        });
    }
    const n_producto = new Producto(req.body);
    const resultado = await n_producto.save()
    res.status(201).json(resultado)
    console.log(resultado);
}
const getProducto = async(req, res)=>{
    const productos = await Producto.find();
    res.status(201).json(productos)
}
const getroductoById = async(req, res)=>{
}

const updateProductoByid = async (req, res)=>{
    if(req.file){
        const resultPath = await cloudinary.v2.uploader.upload(req.file.path)
        req.body.imagen = resultPath.secure_url;
        console.log("resultPath", resultPath.original_filename) 
        fs.unlink("./src/img/"+resultPath.original_filename+"."+resultPath.format)
        .then(() => {
            console.log("File removed");
        }).catch((err) => {
            console.error("Something wrong happened removing the file", err);
        });
    }
    const producto = await Producto.findByIdAndUpdate(req.params, req.body)
    res.status(200).json(producto)  
}
const deleteProductoById = async(req, res)=>{
    console.log(req.params);
    const producto = await Producto.findByIdAndDelete(req.params._id)
    res.status(200).json(producto)
}

module.exports = {
    createProducto,
    getProducto,
    getroductoById,
    updateProductoByid,
    deleteProductoById
}