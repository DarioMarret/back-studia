const { Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre:{
        type: String,
    }, 
    apellido:{
        type: String
    },
    usuario: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    nivel_estudio:{
        type: String,
    },
    edad:{
        type: Number,
    },
    direccion:{
        type: String,
    },
    contacto:{
        type: String,
    },
    imagen: {
        type: String,
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('usuario',usuarioSchema);