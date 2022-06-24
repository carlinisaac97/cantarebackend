const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const RolModel = sequelize.define(
  "Roles",
  {
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rol_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  }
);

module.exports = {
  RolModel,
};
