const cancionController = require("../../controllers/cancion/cancion.controller");
const auhtorizationMiddleware = require("../../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/canciones", auhtorizationMiddleware.authorization, cancionController.list);
  app.get("/canciones-filter", auhtorizationMiddleware.authorization,cancionController.listFilter);
  app.get("/cancion/find/:id", auhtorizationMiddleware.authorization,cancionController.getById);
  app.post("/cancion/create", auhtorizationMiddleware.authorization,cancionController.create);
  app.put("/cancion/update/:id", auhtorizationMiddleware.authorization,cancionController.update);
  app.delete("/cancion/remove/:id", auhtorizationMiddleware.authorization,cancionController.remove);
};
