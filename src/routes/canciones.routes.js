const cancionController = require("../controllers/cancion.controller");
// const auhtorizationMiddleware = require("../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/cancion", cancionController.list);
  app.get("/cancion/solicitadas", cancionController.listCancionesSolicitadas);
  app.get("/cancion-filter", cancionController.listFilter);
  app.get("/cancion/find/:id", cancionController.getById);
  app.post("/cancion/create", cancionController.create);
  app.put("/cancion/update/:id", cancionController.update);
  app.get("/cancion/actualizar-cancion-solicitadas/:id", cancionController.updateCancionSolicitada);
  app.delete("/cancion/remove/:id", cancionController.remove);
};
