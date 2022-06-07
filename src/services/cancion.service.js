const { CancionModel } = require("../models/cancion.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const cancionModelResults = await CancionModel.findAll();

  const cancionesArray = new Array();
  for (let i = 0; i < cancionModelResults.length; i++) {
    const cancionesResult = cancionModelResults[i];
    cancionesArray.push(cancionesResult.dataValues);
  }

  return cancionesArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let cancionesResults = await sequelize.query(
    `SELECT *
                                              FROM canciones
                                              WHERE UPPER (can_nombre) LIKE :q
                                              OR UPPER (can_lyrics) LIKE :q
                                              OR UPPER (can_artista) LIKE :q
                                              ORDER BY can_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //cancionesResults = (cancionesResults && cancionesResults [0]) ? cancionesResults[0] : [];

  console.log("cancionesResults", cancionesResults);

  return cancionesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const cancionModelResults = await CancionModel.findByPk(codigo);

  if (cancionModelResults) {
    return cancionModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const cancionModelResults = await CancionModel.create(data);

  if (cancionModelResults) {
    return cancionModelResults.dataValues;
  } else {
    return null;
  }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const cancionModelCount = await CancionModel.update(data, {
    where: {
      can_id: id,
    },
  });
  console.log("update data", cancionModelCount.datavalues);
  return data;
};




// Eliminar en la Base de datos

const remove = async (can_id) => {
  console.log("remove codigo", can_id);

  const cancionModelCount = await CancionModel.destroy({
    where: {
      can_id,
    },
  });

  if (cancionModelCount > 0) {
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
