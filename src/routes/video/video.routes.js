const videoController = require("../../controllers/video/video.controller");

module.exports = (app) => {
  app.get("/videos", videoController.list);
  app.get("/videos-filter", videoController.listFilter);
  app.get("/video/find/:id", videoController.getById);
  app.post("/video/create", videoController.create);
  app.put("/video/update/:id", videoController.update);
  app.delete("/video/remove/:id", videoController.remove);
};
