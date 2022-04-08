const { VideoModel } = require("../../models/video.model");
const { sequelize } = require("../bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const videoModelResults = await VideoModel.findAll();

  const videosArray = new Array();
  for (let i = 0; i < videoModelResults.length; i++) {
    const videosResult = videoModelResults[i];
    videosArray.push(videosResult.dataValues);
  }

  return videosArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let videosResults = await sequelize.query(
    `SELECT *
                                              FROM videos
                                              WHERE UPPER (vid_nombre) LIKE :q
                                              ORDER BY vid_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //videosResults = (videosResults && videosResults [0]) ? videosResults[0] : [];

  console.log("videosResults", videosResults);

  return videosResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const videoModelResults = await VideoModel.findByPk(codigo);

  if (videoModelResults) {
    return videoModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const videoModelResults = await VideoModel.create(data);
  return videoModelResults.dataValues;
  // if (videoModelResults) {
  //   return videoModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const videoModelCount = await VideoModel.update(data, {
    where: {
      vid_id: id,
    },
  });
  console.log("update data", videoModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (vid_id) => {
  console.log("remove codigo", vid_id);

  const videoModelCount = await VideoModel.destroy({
    where: {
      vid_id,
    },
  });

  if (videoModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  listFilter,
  create,
  getById,
  update,
  remove,
};
