const cancionController = require("../../controllers/cancion/cancion.controller");
const auhtorizationMiddleware = require("../../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/canciones", cancionController.list);
  app.get("/canciones-filter", cancionController.listFilter);
  app.get("/cancion/find/:id", cancionController.getById);
  app.post("/cancion/create", cancionController.create);
  app.put("/cancion/update/:id", cancionController.update);
  app.delete("/cancion/remove/:id", cancionController.remove);
};
