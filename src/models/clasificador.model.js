const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

// const CURRENT_TIMESTAMP = Date.now();

const ClasificadorModel = sequelize.define(
  "Clasificador",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "clasificador",
    timestamps: false,
  }
);

module.exports = {
  ClasificadorModel,
};
