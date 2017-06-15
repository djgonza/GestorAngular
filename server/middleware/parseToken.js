module.exports = function (req, res, next) {
	//Comprobamos que existe el token
	if (req.headers.token){
		jwt.verify(req.headers.token, tokenConfig.secret, (err, decoded) => {
			if(err){
				return;
			}
			//Guardamos el identificador del usuario
			req.user = {id: decoded.id};
			next();
			return;
		});
	}
	next();
}