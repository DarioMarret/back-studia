'use strict'
const express = require('express');
const path = require('path')

const cors = require('cors');
const morgan = require('morgan');
const app = express();
require('./DB/config');
//importaciones de rutas
const productoRoute = require('./routes/producto.routes');
const usuarioRoute = require('./routes/usuario.routes');
const pagoRoute = require('./routes/pagos.routes');

app.use(express.urlencoded({ extended: true }))
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json())

//url  app.use()
app.use(productoRoute);
app.use(usuarioRoute);
app.use(pagoRoute);

// const sslserver = https.createServer({
// // key:fs.readFileSync(path.join(__dirname,'../etc/ssl/certs','server.key')),
// cert:fs.readFileSync(path.join(__dirname,'../etc/ssl/certs','ca-certificates.crt'))
// },app)

app.listen(4000, ()=>{
    console.log('Server on port 4000')
})