const clasificadorService = require("../services/clasificador.service");
const decoder = require("../utiles/jwt.js");

const list = async (req, res) => {
  //console.log("El id del usuario que invoco es: ", req.usuarioId);

  const clasificador = await clasificadorService.list(req.query.q);
  res.send({
    success: true,
    clasificador,
  });
};

const listFilter = async (req, res) => {
  const clasificador = await clasificadorService.listFilter(req.query.q);
  res.send({
    success: true,
    clasificador,
  });
};

const getById = async (req, res) => {
  const clasificador = await clasificadorService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["clasificador"] = clasificador;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const clasificador = await clasificadorService.create(req.body);
  res.status(200).send({
    success: true,
    clasificador,
  });
};

const update = async (req, res) => {
  const clasificador = await clasificadorService.update(
    req.body,
    req.params.id
  );
  console.log("datos actualizacion", clasificador);
  res.status(202).send({
    success: true,
    clasificador,
  });
};

const remove = async (req, res) => {
  const booleanValue = await clasificadorService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter,
};
