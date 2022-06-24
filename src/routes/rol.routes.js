const rolController = require("../controllers/rol.controller");

module.exports = (app) => {
  app.get("/rol", rolController.list);
  app.get("/rol-filter", rolController.listFilter);
  app.get("/rol/find/:id", rolController.getById);
  app.post("/rol/create", rolController.create);
  app.put("/rol/update/:id", rolController.update);
  app.delete("/rol/remove/:id", rolController.remove);
};
