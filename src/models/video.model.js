const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const VideoModel = sequelize.define(
  "Videos",
  {
    vid_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vid_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vid_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "videos",
    timestamps: false,
  }
);

module.exports = {
  VideoModel,
};
