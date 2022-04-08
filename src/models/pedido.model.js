const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const PedidoModel = sequelize.define(
  "Pedidos",
  {
    ped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usu_id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ped_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "pedidos",
    timestamps: false,
  }
);

module.exports = {
  PedidoModel,
};
