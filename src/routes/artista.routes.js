const artistaController = require("../controllers/artista.controller");

module.exports = (app) => {
  app.get("/artistas", artistaController.list);
  app.get("/artistas-filter", artistaController.listFilter);
  app.get("/artista/find/:id", artistaController.getById);
  app.post("/artista/create", artistaController.create);
  app.put("/artista/update/:id", artistaController.update);
  app.delete("/artista/remove/:id", artistaController.remove);
};
