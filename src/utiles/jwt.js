const jwt = require("jsonwebtoken");

const decodificarToken = (token) => {
    let temp=null;
  if (token && token.length > 0) {

     try {
        ValidarToken(token)
        temp= jwt.decode(token, "shhhhhh").usu_codigo;
        console.log("TEMPPPP", temp);
      } catch (error) {
          return null;
      }
  }
  return temp;

};

const crearToken=(payload,expiresIn)=>{
    return  jwt.sign(payload, "shhhhhh",{expiresIn:expiresIn});
}

const ValidarToken=(token)=>{

    jwt.verify(token,"shhhhhh");
    
}
module.exports = {
  decodificarToken,
  ValidarToken,
  crearToken
};
