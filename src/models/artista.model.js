const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ArtistaModel = sequelize.define(
  "Artistas",
  {
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    art_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    art_canciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    art_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "artistas",
    timestamps: false,
  }
);

module.exports = {
  ArtistaModel,
};
