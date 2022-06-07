const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

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
    can_artista: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    can_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    },
    can_comentario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    can_lyrics: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    can_solicitada: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
