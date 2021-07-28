const { Schema, model} = require('mongoose')

const productosSchema = new Schema({
    categoria: String,
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('categoria',productosSchema);