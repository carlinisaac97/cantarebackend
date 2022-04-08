const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CancionModel = sequelize.define(
  "Canciones",
  {
    can_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    can_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    can_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    can_comentario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    can_lyrics: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "canciones",
    timestamps: false,
  }
);

module.exports = {
  CancionModel,
};