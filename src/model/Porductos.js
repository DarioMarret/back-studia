const { Schema, model} = require('mongoose')

const productosSchema = new Schema({
    nombre: String,
    categoria: String,
    descuento: Number,
    precio: Number,
    imagen: String
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('producto',productosSchema);