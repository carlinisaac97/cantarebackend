const videoService = require("../../services/video/video.service");

const list = async (req, res) => {
  const video = await videoService.list(req.query.q);
  res.send({
    success: true,
    video,
  });
};

const listFilter = async (req, res) => {
  const video = await videoService.listFilter(req.query.q);
  res.send({
    success: true,
    video,
  });
};

const getById = async (req, res) => {
  const video = await videoService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["video"] = video;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const video = await videoService.create(req.body);
  res.status(200).send({
    success: true,
    video,
  });
};

const update = async (req, res) => {
  const video = await videoService.update(req.body, req.params.id);
  console.log('datos actualizacion',video);
  res.status(202).send({
    success: true,
    video,
  });
};

const remove = async (req, res) => {
  const booleanValue = await videoService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };
