const pedidoController = require("../../controllers/pedido/pedido.controller");

module.exports = (app) => {
  app.get("/pedidos", pedidoController.list);
  // app.get("/pedidos-filter", pedidoController.listFilter);
  app.get("/pedido/find/:id", pedidoController.getById);
  app.post("/pedido/create", pedidoController.create);
  app.put("/pedido/update/:id", pedidoController.update);
  app.delete("/pedido/remove/:id", pedidoController.remove);
};
