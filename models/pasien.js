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
      allowNull:false,
      unique:true,
      validate: {
        notEmpty: {
          msg: "Nomer registrasi harus diisi"
        },
        notNull: {
          msg: "Nomer registrasi tidak boleh kosong"
        }
      }
    },
    nama: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Nama harus diisi"
        },
        notNull: {
          msg: "Nama tidak boleh kosong"
        }
      }
    },
    jkn: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "JKN harus diisi"
        },
        notNull: {
          msg: "JKN tidak boleh kosong"
        }
      }
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Alamat harus diisi"
        },
        notNull: {
          msg: "Alamat tidak boleh kosong"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Status harus diisi"
        },
        notNull: {
          msg: "Status tidak boleh kosong"
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Tinggi badan harus diisi"
        },
        notNull: {
          msg: "Tinggi badan tidak boleh kosong"
        }
      }
    },
    berat_badan: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Berat badan harus diisi"
        },
        notNull: {
          msg: "Berat badan tidak boleh kosong"
        }
      }
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Usia harus diisi"
        },
        notNull: {
          msg: "Usia tidak boleh kosong"
        }
      }
    },
    ktp: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'pasiens',
    modelName: 'Pasien',
  });
  return Pasien;
};
