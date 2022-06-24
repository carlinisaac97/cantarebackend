const rolService = require("../services/rol.service");

const list = async (req, res) => {
  const data = await rolService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await rolService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await rolService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["data"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const data = await rolService.create(req.body);
  res.status(200).send({
    success: true,
    data,
  });
};

const update = async (req, res) => {
  const data = await rolService.update(req.body, req.params.id);
  console.log("datos actualizacion", data);
  res.status(202).send({
    success: true,
    data,
  });
};

const remove = async (req, res) => {
  const booleanValue = await rolService.remove(req.params.id);
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
