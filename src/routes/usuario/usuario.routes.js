const usuarioController = require("../../controllers/usuario/usuario.controller");
const auhtorizationMiddleware = require("../../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/usuarios", auhtorizationMiddleware.authorization ,usuarioController.list);
  app.get("/usuarios-filter", auhtorizationMiddleware.authorization, usuarioController.listFilter);
  app.get("/usuario/find/:id", auhtorizationMiddleware.authorization, usuarioController.getById);
  app.post("/usuario/create", usuarioController.create);
  app.put("/usuario/update/:id", auhtorizationMiddleware.authorization, usuarioController.update);
  app.delete("/usuario/remove/:id", auhtorizationMiddleware.authorization, usuarioController.remove);
  
  app.post("/usuario/login",  usuarioController.login);

  app.post("/usuario/logout", auhtorizationMiddleware.authorization, usuarioController.logout);

};
