const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost/studio",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true,
})
.then(db => console.log("DB es conectado"))
.catch(err => console.log("DB es error al conectar", err))