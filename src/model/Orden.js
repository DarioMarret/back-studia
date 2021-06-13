const { Schema, model} = require('mongoose')

const ordenSchema = new Schema({
    usuario: String,
    productos: String,
    cantidad: Number,
    precio: Number,
    stado: String
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('orden',ordenSchema);