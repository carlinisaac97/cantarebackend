const { PedidoModel } = require("../../models/pedido.model");
const { sequelize } = require("../bd.service");

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

// Consulta en la Base de datos con filtro cambiar para vincular con el USER

// const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
//   let pedidosResults = await sequelize.query(
//     `SELECT *
//                                               FROM pedidos
//                                               WHERE UPPER (usu_nombre) LIKE :q
//                                               OR UPPER (usu_documento) LIKE :q
//                                               OR UPPER (usu_telefono) LIKE :q
//                                               ORDER BY usu_nombre`,
//     {
//       replacements: {
//         q: query ? "%" + query.toUpperCase() + "%" : "%",
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

  //pedidosResults = (pedidosResults && pedidosResults [0]) ? pedidosResults[0] : [];

//   console.log("pedidosResults", pedidosResults);

//   return pedidosResults;
// };

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
  // if (pedidoModelResults) {
  //   return pedidoModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const pedidoModelCount = await PedidoModel.update(data, {
    where: {
      ped_id: id,
    },
  });
  console.log("update data", pedidoModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (ped_id) => {
  console.log("remove codigo", ped_id);

  const pedidoModelCount = await PedidoModel.destroy({
    where: {
      ped_id,
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
  // listFilter,
  create,
  getById,
  update,
  remove,
};
