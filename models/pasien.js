'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pasien.init({
    reg: {
      type: DataTypes.STRING,
      primaryKey:true,
      allowNull:false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull:false
    },
    jkn: {
      type: DataTypes.STRING,
      allowNull:false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull:false
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'pasiens',
    modelName: 'Pasien',
  });
  return Pasien;
};