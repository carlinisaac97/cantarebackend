const cancionService = require("../services/cancion.service");
const decoder = require("../utiles/jwt.js");

const list = async (req, res) => {
  //console.log("El id del usuario que invoco es: ", req.usuarioId);

  const cancion = await cancionService.list(req.query.q);
  res.send({
    success: true,
    cancion,
  });
};

const listFilter = async (req, res) => {
  const cancion = await cancionService.listFilter(req.query.q);
  res.send({
    success: true,
    cancion,
  });
};

const listCancionesSolicitadas = async (req, res) => {
  const cancion = await cancionService.listCancionesSolicitadas(req.query.q);
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

const updateCancionSolicitada = async  (req, res) => {
  const cancion = await cancionService.updateCancionSolicitada(req.params.id);
  res.status(202).send({
    success: 'true',
  });
};

 
const remove = async (req, res) => {
  const booleanValue = await cancionService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  listCancionesSolicitadas,
  getById,
  create,
  update,
  updateCancionSolicitada,
  remove,
  listFilter,
};
