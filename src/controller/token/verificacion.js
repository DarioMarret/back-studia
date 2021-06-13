function VerificarToken(req, res, next){
    const headerBearer = req.headers["authorization"];
    if(typeof headerBearer !== 'undefined'){
        const headerToken = headerBearer.split(" ")[1];
        req.params.token = headerToken;
        next();
    }else{
        res.json({
            "code": 401,
            "succes": false,
            message: typeof headerBearer === undefined ? "no envio el token":"toke incorrecto",
        });
    }
}
module.exports = VerificarToken