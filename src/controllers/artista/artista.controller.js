const artistaService = require("../../services/artista/artista.service");

const list = async (req, res) => {
  const artista = await artistaService.list(req.query.q);
  res.send({
    success: true,
    artista,
  });
};

const listFilter = async (req, res) => {
  const artista = await artistaService.listFilter(req.query.q);
  res.send({
    success: true,
    artista,
  });
};

const getById = async (req, res) => {
  const artista = await artistaService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["artista"] = artista;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const artista = await artistaService.create(req.body);
  res.status(200).send({
    success: true,
    artista,
  });
};

const update = async (req, res) => {
  const artista = await artistaService.update(req.body, req.params.id);
  console.log('datos actualizacion',artista);
  res.status(202).send({
    success: true,
    artista,
  });
};

const remove = async (req, res) => {
  const booleanValue = await artistaService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };
