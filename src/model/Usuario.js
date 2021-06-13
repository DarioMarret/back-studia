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
    pais: {
        type: String,
    },
    orden: [{
        ref: "orden",
        type: Schema.Types.ObjectID
    }],
    direccion: [{
        ref: "direccion",
        type: Schema.Types.ObjectID
    }],
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('usuario',usuarioSchema);