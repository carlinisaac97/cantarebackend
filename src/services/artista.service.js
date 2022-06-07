const { ArtistaModel } = require("../models/artista.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const artistaModelResults = await ArtistaModel.findAll();

  const artistasArray = new Array();
  for (let i = 0; i < artistaModelResults.length; i++) {
    const artistasResult = artistaModelResults[i];
    artistasArray.push(artistasResult.dataValues);
  }

  return artistasArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let artistasResults = await sequelize.query(
    `SELECT *
                                              FROM artistas
                                              WHERE UPPER (art_nombre) LIKE :q
                                              OR UPPER (art_canciones) LIKE :q
                                              ORDER BY art_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //artistasResults = (artistasResults && artistasResults [0]) ? artistasResults[0] : [];

  console.log("artistasResults", artistasResults);

  return artistasResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const artistaModelResults = await ArtistaModel.findByPk(codigo);

  if (artistaModelResults) {
    return artistaModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const artistaModelResults = await ArtistaModel.create(data);
  return artistaModelResults.dataValues;
  // if (artistaModelResults) {
  //   return artistaModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const artistaModelCount = await ArtistaModel.update(data, {
    where: {
      art_id: id,
    },
  });
  console.log("update data", artistaModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (art_id) => {
  console.log("remove codigo", art_id);

  const artistaModelCount = await ArtistaModel.destroy({
    where: {
      art_id,
    },
  });

  if (artistaModelCount > 0) {
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
