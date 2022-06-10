const { PedidoModel } = require("../models/pedido.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const pedidoModelResults = await PedidoModel.findAll();

  const pedidosArray = new Array();
  for (let i = 0; i < pedidoModelResults.length; i++) {
    const pedidosResult = pedidoModelResults[i];
    pedidosArray.push(pedidosResult.dataValues);
  }

  return pedidosArray;
};

const listCancionesSolicitadas = async (query, pageStart = 1, pageLimit = 10) => {
  // let cancionesResults = await sequelize.query(
  //   `UPDATE *
  //                                             FROM pedidos
  //                                             WHERE UPPER (can_nombre) LIKE :q
  //                                             OR UPPER (can_lyrics) LIKE :q
  //                                             OR UPPER (can_artista) LIKE :q
  //                                             ORDER BY can_nombre`,
  //   {
  //     replacements: {
  //       q: query ? "%" + query.toUpperCase() + "%" : "%",
  //     },
  //     type: QueryTypes.SELECT,
  //   }
  // );

  // console.log("cancionesResults", cancionesResults);

  // return cancionesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const pedidoModelResults = await PedidoModel.findByPk(codigo);

  if (pedidoModelResults) {
    return pedidoModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const pedidoModelResults = await PedidoModel.create(data);
  return pedidoModelResults.dataValues;
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const pedidoModelCount = await PedidoModel.update(data, {
    where: {
      ped_codigo: id,
    },
  });
  console.log("update data", pedidoModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (ped_codigo) => {
  console.log("remove codigo", ped_codigo);

  const pedidoModelCount = await PedidoModel.destroy({
    where: {
      ped_codigo,
    },
  });

  if (pedidoModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  listCancionesSolicitadas,
  create,
  getById,
  update,
  remove,
};
