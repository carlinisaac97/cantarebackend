const clasificadorController = require("../controllers/clasificador.controller");
// const auhtorizationMiddleware = require("../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/clasificador", clasificadorController.list);
  app.get("/clasificador-filter", clasificadorController.listFilter);
  app.get("/clasificador/find/:id", clasificadorController.getById);
  app.post("/clasificador/create", clasificadorController.create);
  app.put("/clasificador/update/:id", clasificadorController.update);
  app.delete("/clasificador/remove/:id", clasificadorController.remove);
};
