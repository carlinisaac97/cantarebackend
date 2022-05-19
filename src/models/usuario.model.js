const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const UsuarioModel = sequelize.define(
  "Usuarios",
  {
    usu_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usu_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_pass: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    usu_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = {
  UsuarioModel,
};
