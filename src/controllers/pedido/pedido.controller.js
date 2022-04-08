const pedidosService = require("../../services/pedido/pedido.service");

const list = async (req, res) => {
  const pedidos = await pedidosService.list(req.query.q);
  res.send({
    success: true,
    pedidos,
  });
};

// const listFilter = async (req, res) => {
//   const pedidos = await pedidosService.listFilter(req.query.q);
//   res.send({
//     success: true,
//     pedidos,
//   });
// };

const getById = async (req, res) => {
  const pedidos = await pedidosService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["pedidos"] = pedidos;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const pedidos = await pedidosService.create(req.body);
  res.status(200).send({
    success: true,
    pedidos,
  });
};

const update = async (req, res) => {
  const pedidos = await pedidosService.update(req.body, req.params.id);
  console.log('datos actualizacion',pedidos);
  res.status(202).send({
    success: true,
    pedidos,
  });
};

const remove = async (req, res) => {
  const booleanValue = await pedidosService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, 
  //listFilter 
};
