const { Schema, model} = require('mongoose')
var usuario = model('usuario');
const ordenSchema = new Schema({
    productos: [],
    id_pago: String,
    id_usuario:String,
    usuario:{ type: Schema.ObjectId, ref: "usuario" },
    
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('orden',ordenSchema);