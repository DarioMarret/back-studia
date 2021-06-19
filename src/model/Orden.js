const { Schema, model} = require('mongoose')
var usuario = model('usuario');
const ordenSchema = new Schema({
    productos: String,
    cantidad: Number,
    precio: Number,
    stado: String,
    usuario:{ type: Schema.ObjectId, ref: "usuario" },
    
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('orden',ordenSchema);