const { ClasificadorModel } = require("../models/clasificador.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const clasificadorModelResults = await ClasificadorModel.findAll();

  const clasificadorArray = new Array();
  for (let i = 0; i < clasificadorModelResults.length; i++) {
    const clasificadorResult = clasificadorModelResults[i];
    clasificadorArray.push(clasificadorResult.dataValues);
  }

  return clasificadorArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let clasificadorResults = await sequelize.query(
    `SELECT *
                                              FROM clasificador
                                              WHERE UPPER (descripcion) LIKE :q
                                              ORDER BY descripcion`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //clasificadorResults = (clasificadorResults && clasificadorResults [0]) ? clasificadorResults[0] : [];

  console.log("clasificadorResults", clasificadorResults);

  return clasificadorResults;
};


// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const clasificadorModelResults = await ClasificadorModel.findByPk(codigo);

  if (clasificadorModelResults) {
    return clasificadorModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const clasificadorModelResults = await ClasificadorModel.create(data);

  if (clasificadorModelResults) {
    return clasificadorModelResults.dataValues;
  } else {
    return null;
  }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const clasificadorModelCount = await ClasificadorModel.update(data, {
    where: {
      id: id,
    },
  });
  console.log("update data", clasificadorModelCount.datavalues);
  return data;
};



// Eliminar en la Base de datos

const remove = async (id) => {
  console.log("remove codigo", id);
  
  const clasificadorModelCount = await ClasificadorModel.destroy({
    where: {
      id,
    },
  });
  
  if (clasificadorModelCount > 0) {
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
