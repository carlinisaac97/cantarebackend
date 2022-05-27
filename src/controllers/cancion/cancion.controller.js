const cancionService = require("../../services/cancion/cancion.service");
const decoder = require("../../utiles/jwt.js");

const list = async (req, res) => {
  try {
    let usu_Id;
    console.log(req.params);
    console.log(req.body);
    //console.log(req.usuarioId);
  
    console.log("Inicio decodificar");
    usu_Id = decoder.decodificarToken(req.headers.authorization);
  
    if (!usu_Id) throw "Token invalido";
  
    console.log("fin decodificar");
    console.log(usu_Id);
    console.log(req.headers.authorization);
  
    console.log("El codigo el usuario que invoco es: ", usu_Id);
  
    const cancion = await cancionService.list(req.query.q);
    res.send({
      success: true,
      cancion,
    });
  } catch (error) {
    res.send({
      success: false,
      cancion:null,
      error:error
    });
  }

};

const listFilter = async (req, res) => {
  const cancion = await cancionService.listFilter(req.query.q);
  res.send({
    success: true,
    cancion,
  });
};

const getById = async (req, res) => {
  const cancion = await cancionService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["cancion"] = cancion;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const cancion = await cancionService.create(req.body);
  res.status(200).send({
    success: true,
    cancion,
  });
};

const update = async (req, res) => {
  const cancion = await cancionService.update(req.body, req.params.id);
  console.log("datos actualizacion", cancion);
  res.status(202).send({
    success: true,
    cancion,
  });
};

const remove = async (req, res) => {
  const booleanValue = await cancionService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };
