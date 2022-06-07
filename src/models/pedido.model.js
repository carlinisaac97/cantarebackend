const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const PedidoModel = sequelize.define(
  "Pedidos",
  {
    ped_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
 
    ped_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
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
