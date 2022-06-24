const { RolModel } = require("../models/rol.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const rolModelResults = await RolModel.findAll();

  const rolesArray = new Array();
  for (let i = 0; i < rolModelResults.length; i++) {
    const rolesResult = rolModelResults[i];
    rolesArray.push(rolesResult.dataValues);
  }

  return rolesArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let rolesResults = await sequelize.query(
    `SELECT *
                                              FROM roles
                                              WHERE UPPER (rol_descripcion) LIKE :q
                                              ORDER BY rol_descripcion`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //rolesResults = (rolesResults && rolesResults [0]) ? rolesResults[0] : [];

  console.log("rolesResults", rolesResults);

  return rolesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const rolModelResults = await RolModel.findByPk(codigo);

  if (rolModelResults) {
    return rolModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  try {
    const rolModelResults = await RolModel.create(data);
  
    if (rolModelResults) {
      return rolModelResults.dataValues;
    } else {
      return null;
    }
    
  } catch (error) {
    error
  }

};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const rolModelCount = await RolModel.update(data, {
    where: {
      rol_id: id,
    },
  });
  console.log("update data", rolModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (rol_id) => {
  console.log("remove codigo", rol_id);

  const rolModelCount = await RolModel.destroy({
    where: {
      rol_id,
    },
  });

  if (rolModelCount > 0) {
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
